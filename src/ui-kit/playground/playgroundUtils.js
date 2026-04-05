export function buildUsageSnippet(name, props) {
    const lines = Object.entries(props)
        .filter(([, v]) => v !== null && v !== undefined && v !== '' && typeof v !== 'function' && !Array.isArray(v) && typeof v !== 'object')
        .map(([k, v]) => {
            if (typeof v === 'boolean') return v ? `  ${k}` : `  ${k}={false}`;
            if (typeof v === 'number') return `  ${k}={${v}}`;
            return `  ${k}="${v}"`;
        });
    return `import { ${name} } from './ui-kit';\n\n<${name}\n${lines.join('\n')}\n/>`;
}

export function copyToClipboard(text) {
    if (navigator.clipboard) return navigator.clipboard.writeText(text);
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    return Promise.resolve();
}

export function isColorVar(varName) {
    return varName.includes('color');
}
