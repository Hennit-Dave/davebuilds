"""Validate published pages and local destinations without changing them."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote

root = Path(__file__).resolve().parents[3] / 'dist'

class Page(HTMLParser):
    def __init__(self, path):
        super().__init__()
        self.path, self.tags, self.text = path, [], []
        self.feed(path.read_text())
    def handle_starttag(self, tag, attrs):
        self.tags.append((tag, dict(attrs)))
    def handle_data(self, data):
        self.text.append(data)

pages = {path.name: Page(path) for path in root.glob('*.html')}
for name, page in pages.items():
    ids = [a['id'] for _, a in page.tags if 'id' in a]
    assert len(ids) == len(set(ids)), (name, 'duplicate IDs')
    assert sum(tag == 'h1' for tag, _ in page.tags) == 1, (name, 'h1 count')
    assert any(tag == 'main' and a.get('tabindex') == '-1' for tag, a in page.tags)
    main_id = next(a['id'] for tag, a in page.tags if tag == 'main')
    assert any(a.get('href') == '#' + main_id and a.get('class') == 'skip-link' for _, a in page.tags)
    assert any(a.get('property') == 'og:description' for _, a in page.tags)
    for tag, attrs in page.tags:
        if tag == 'img':
            assert attrs.get('alt', '').strip(), (name, 'missing alt')
            assert attrs.get('width') and attrs.get('height'), (name, 'missing image dimensions')
        for key in ['href', 'src']:
            if key not in attrs:
                continue
            value = attrs[key]
            assert value != '#', (name, 'placeholder link')
            url = urlsplit(value)
            if url.scheme or url.netloc:
                continue
            target = root / unquote(url.path).lstrip('/') if url.path else page.path
            assert target.exists(), (name, value, 'missing local file')
            if url.fragment and target.suffix == '.html':
                target_ids = [a.get('id') for _, a in pages[target.name].tags]
                assert url.fragment in target_ids, (name, value, 'missing fragment')
    assert 'Oluwaseun' not in ' '.join(page.text), (name, 'outdated display name')
    print(f'PASS {name}: one h1, unique IDs, skip/main target, metadata, image alt/dimensions, local links.')
home = pages['index.html']
assert sum('data-availability' in a for _, a in home.tags) == 1
assert all(old not in ' '.join(home.text) for old in ['TaskFlow', 'Lumière'])
case = ' '.join(pages['davebuilds-freelance-marketplace-api.html'].text)
assert all(f'TODO — check {n}' in case for n in range(2, 6))
print('PASS homepage availability/legacy separation and case-study TODO checks 2–5.')
