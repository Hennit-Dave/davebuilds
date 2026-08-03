const fs = require('fs');
const path = require('path');

// File paths
const COLOR_ROLES_PATH = path.join(__dirname, 'portfolio-color-roles-cool-monochrome.json');
const TYPOGRAPHY_TOKENS_PATH = path.join(__dirname, 'portfolio-typography-tokens.json');
const OUTPUT_CSS_PATH = path.join(__dirname, 'portfolio-tokens.css');

// Load JSON data
const colorData = JSON.parse(fs.readFileSync(COLOR_ROLES_PATH, 'utf8'));
const typographyData = JSON.parse(fs.readFileSync(TYPOGRAPHY_TOKENS_PATH, 'utf8'));

/**
 * Resolves dot-separated paths in an object (e.g., "portfolio.ref.font-family.mono")
 */
function getValueByPath(obj, pathString) {
  const parts = pathString.split('.');
  let current = obj;
  for (const part of parts) {
    if (current && typeof current === 'object' && part in current) {
      current = current[part];
    } else {
      return undefined;
    }
  }
  return current;
}

/**
 * Resolves references like "{portfolio.ref.font-family.mono}" to actual raw values
 */
function resolveReference(val, rootObj1, rootObj2) {
  if (typeof val !== 'string') return val;
  const match = val.match(/^\{([^}]+)\}$/);
  if (!match) return val;

  const pathStr = match[1];
  let target = getValueByPath(rootObj1, pathStr) || getValueByPath(rootObj2, pathStr);
  
  if (target && target.$value !== undefined) {
    return resolveReference(target.$value, rootObj1, rootObj2);
  }
  return target !== undefined ? target : val;
}

/**
 * Formats a raw font-family value (array or string) for CSS
 */
function formatFontFamily(fontValue) {
  if (Array.isArray(fontValue)) {
    return fontValue.map(f => (f.includes(' ') ? `'${f}'` : f)).join(', ');
  }
  return fontValue;
}

// Combine root objects for reference lookup
const fullContext = {
  portfolio: {
    ...colorData.portfolio,
    ...typographyData.portfolio
  }
};

/**
 * Process Color Roles
 */
function processColorRoles(themeObj) {
  const vars = [];
  
  for (const categoryKey in themeObj) {
    if (categoryKey.startsWith('$')) continue;
    const category = themeObj[categoryKey];
    for (const roleKey in category) {
      if (roleKey.startsWith('$')) continue;
      const token = category[roleKey];
      const rawVal = resolveReference(token.$value, fullContext, fullContext);
      
      // CSS Variable Name (e.g., --portfolio-color-primary, --portfolio-color-surface-dim)
      const varName = `--portfolio-color-${roleKey}`;
      const description = token.$description ? ` /* ${token.$description} */` : '';
      vars.push(`  ${varName}: ${rawVal};${description}`);
    }
  }
  
  return vars;
}

/**
 * Process Typography Reference Tokens (Font families & weights)
 */
function processTypographyRefs() {
  const vars = [];
  const refs = typographyData.portfolio?.ref || {};

  // Font families
  if (refs['font-family']) {
    for (const key in refs['font-family']) {
      const val = refs['font-family'][key].$value;
      const formattedVal = formatFontFamily(val);
      vars.push(`  --portfolio-font-family-${key}: ${formattedVal};`);
    }
  }

  // Font weights
  if (refs['font-weight']) {
    for (const key in refs['font-weight']) {
      const val = refs['font-weight'][key].$value;
      vars.push(`  --portfolio-font-weight-${key}: ${val};`);
    }
  }

  return vars;
}

/**
 * Process Typography System Tokens
 */
function processTypographySystem() {
  const vars = [];
  const utilityClasses = [];
  const sysTypo = typographyData.portfolio?.sys?.typography || {};

  for (const roleName in sysTypo) {
    const item = sysTypo[roleName];
    const rawObj = item.$value;
    const cleanDescription = item.$description ? ` - ${item.$description}` : '';

    const family = formatFontFamily(resolveReference(rawObj.fontFamily, fullContext, fullContext));
    const weight = resolveReference(rawObj.fontWeight, fullContext, fullContext);
    const size = rawObj.fontSize;
    const lineHeight = rawObj.lineHeight;
    const letterSpacing = rawObj.letterSpacing;

    const baseVar = `--portfolio-typography-${roleName}`;

    // Detailed tokens
    vars.push(`  /* ${roleName}${cleanDescription} */`);
    vars.push(`  ${baseVar}-font-family: ${family};`);
    vars.push(`  ${baseVar}-font-weight: ${weight};`);
    vars.push(`  ${baseVar}-font-size: ${size};`);
    vars.push(`  ${baseVar}-line-height: ${lineHeight};`);
    vars.push(`  ${baseVar}-letter-spacing: ${letterSpacing};`);
    vars.push('');

    // Class helper
    utilityClasses.push(`.text-${roleName} {
  font-family: var(${baseVar}-font-family);
  font-weight: var(${baseVar}-font-weight);
  font-size: var(${baseVar}-font-size);
  line-height: var(${baseVar}-line-height);
  letter-spacing: var(${baseVar}-letter-spacing);
}`);
  }

  return { vars, utilityClasses };
}

// Generate CSS Content
const darkColorVars = processColorRoles(colorData.portfolio.color.dark);
const lightColorVars = processColorRoles(colorData.portfolio.color.light);
const typoRefVars = processTypographyRefs();
const { vars: typoSysVars, utilityClasses } = processTypographySystem();

const cssContent = `/**
 * Portfolio Design Tokens CSS
 * Auto-generated from portfolio-color-roles-cool-monochrome.json and portfolio-typography-tokens.json
 */

/* ==========================================================================
   Root Tokens (Dark Theme Default & Typography)
   ========================================================================== */
:root,
[data-theme="dark"] {
  /* Typography Reference Tokens */
${typoRefVars.join('\n')}

  /* Typography System Tokens */
${typoSysVars.join('\n')}

  /* Dark Theme Color Roles (Default) */
${darkColorVars.join('\n')}
}

/* ==========================================================================
   Light Theme Color Roles
   ========================================================================== */
[data-theme="light"],
.theme-light {
${lightColorVars.join('\n')}
}

/* ==========================================================================
   Typography Utility Classes
   ========================================================================== */
${utilityClasses.join('\n\n')}
`;

// Write output
fs.writeFileSync(OUTPUT_CSS_PATH, cssContent, 'utf8');
console.log(`✅ Successfully generated CSS tokens at: ${OUTPUT_CSS_PATH}`);
