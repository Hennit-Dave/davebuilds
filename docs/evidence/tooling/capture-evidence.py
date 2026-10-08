"""Run separate Lighthouse screenshot captures and unmodified scoring audits."""
import base64
import json
import os
from pathlib import Path
import subprocess

root = Path(__file__).resolve().parents[3]
evidence = root / 'docs/evidence'
base = ['npm', 'exec', '--offline', '--cache', '/private/tmp/portfolio-npm-cache', '--package', 'lighthouse', '--', 'lighthouse']
jobs = [
 ('home-360', '/', 360, 800, False),
 ('home-768', '/', 768, 900, False),
 ('home-1280', '/', 1280, 900, False),
 ('case-study-360', '/davebuilds-freelance-marketplace-api.html', 360, 800, False),
 ('case-study', '/davebuilds-freelance-marketplace-api.html', 1280, 900, False),
 ('home-360-dark', '/', 360, 800, True),
]
with (evidence / 'capture-commands.txt').open('w') as log:
 for name, path, width, height, dark in jobs:
  output = Path('/private/tmp') / f'portfolio-{name}.json'
  command = base + ['http://127.0.0.1:4173' + path,
   '--chrome-flags=--headless=new' + (' --force-dark-mode' if dark else ''),
   '--config-path=docs/evidence/tooling/screenshot-config.mjs', '--output=json', f'--output-path={output}',
   f'--screenEmulation.width={width}', f'--screenEmulation.height={height}', '--screenEmulation.deviceScaleFactor=1', '--quiet']
  log.write('$ ' + ' '.join(command) + '\n'); log.flush()
  result = subprocess.run(command, cwd=root, env=os.environ, capture_output=True, text=True)
  log.write(result.stdout + result.stderr + f'\nExit code: {result.returncode}\n'); log.flush()
  if result.returncode: raise SystemExit(result.returncode)
  report = json.loads(output.read_text())
  artifact = report['fullPageScreenshot']
  (evidence / f'{name}.png').write_bytes(base64.b64decode(artifact['screenshot']['data'].split(',')[1]))
  layout = artifact['layoutEvidence']
  layout['accessibilityScoreDuringCapture'] = report['categories']['accessibility']['score'] * 100
  (evidence / f'layout-{name}.json').write_text(json.dumps(layout, indent=2) + '\n')
  assert layout['documentWidth'] == width and layout['bodyWidth'] == width, (name, 'horizontal overflow')
  assert all(image['loaded'] for image in layout['images']), (name, 'unloaded image')
  print(f'{name}: {width}px; no horizontal overflow; all images loaded; theme {layout["theme"]}; accessibility {layout["accessibilityScoreDuringCapture"]}', flush=True)
 # Official scores use stock Lighthouse, without the screenshot extension.
 for name,path in [('lighthouse-mobile','/'),('lighthouse-case-mobile','/davebuilds-freelance-marketplace-api.html')]:
  command = base + ['http://127.0.0.1:4173'+path, '--chrome-flags=--headless=new',
   '--only-categories=performance,accessibility,best-practices,seo', '--output=html', '--output=json',
   f'--output-path=docs/evidence/{name}', '--screenEmulation.width=360', '--screenEmulation.height=800',
   '--screenEmulation.deviceScaleFactor=1','--quiet']
  log.write('$ '+' '.join(command)+'\n');log.flush()
  result=subprocess.run(command,cwd=root,capture_output=True,text=True)
  log.write(result.stdout+result.stderr+f'\nExit code: {result.returncode}\n');log.flush()
  if result.returncode: raise SystemExit(result.returncode)
  report=json.loads((evidence/f'{name}.report.json').read_text())
  print(name+': '+json.dumps({k:round(v['score']*100) for k,v in report['categories'].items()}),flush=True)
