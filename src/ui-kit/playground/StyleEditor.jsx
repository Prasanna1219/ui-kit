import React from 'react';
import { isColorVar, buildUsageSnippet, copyToClipboard } from './playgroundUtils.js';
import styles from './StyleEditor.module.css';

export function StyleEditor({ name, schema, props, onPropChange, tokenOverrides, tokenValues, onTokenChange }) {
    const [copied, setCopied] = React.useState('');

    function handleCopy(type) {
        const text = type === 'import'
            ? `import { ${name} } from './ui-kit';`
            : buildUsageSnippet(name, props);
        copyToClipboard(text).then(() => {
            setCopied(type);
            setTimeout(() => setCopied(''), 1800);
        });
    }

    return (
        <aside className={styles.editor}>
            <div className={styles.section}>
                <div className={styles.sectionTitle}>Props</div>
                {Object.entries(schema).map(([key, def]) => (
                    <div key={key} className={styles.field}>
                        <label className={styles.fieldLabel}>{def.label}</label>
                        {def.type === 'select' && (
                            <select
                                className={styles.select}
                                value={props[key] ?? ''}
                                onChange={e => onPropChange(key, e.target.value)}
                            >
                                {def.options.map(o => <option key={o} value={o}>{o}</option>)}
                            </select>
                        )}
                        {def.type === 'text' && (
                            <input
                                className={styles.input}
                                type="text"
                                value={props[key] ?? ''}
                                onChange={e => onPropChange(key, e.target.value)}
                            />
                        )}
                        {def.type === 'boolean' && (
                            <label className={styles.toggle}>
                                <input
                                    type="checkbox"
                                    checked={!!props[key]}
                                    onChange={e => onPropChange(key, e.target.checked)}
                                    className={styles.toggleInput}
                                />
                                <span className={[styles.toggleTrack, props[key] ? styles.toggleOn : ''].join(' ')}>
                                    <span className={styles.toggleThumb} />
                                </span>
                            </label>
                        )}
                    </div>
                ))}
                {Object.keys(schema).length === 0 && (
                    <p className={styles.empty}>No editable props for this component.</p>
                )}
            </div>

            <div className={styles.section}>
                <div className={styles.sectionTitle}>Token overrides</div>
                <p className={styles.hint}>Live-edit CSS variables. Changes apply only to the preview.</p>
                {tokenOverrides.map(varName => (
                    <div key={varName} className={styles.field}>
                        <label className={styles.fieldLabel} title={varName}>{varName.replace('--', '')}</label>
                        <div className={styles.tokenRow}>
                            {isColorVar(varName) && (
                                <input
                                    type="color"
                                    className={styles.colorPicker}
                                    value={tokenValues[varName] || '#6366F1'}
                                    onChange={e => onTokenChange(varName, e.target.value)}
                                />
                            )}
                            <input
                                className={styles.input}
                                type="text"
                                value={tokenValues[varName] || ''}
                                placeholder="e.g. 8px, #6366F1"
                                onChange={e => onTokenChange(varName, e.target.value)}
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.section}>
                <div className={styles.sectionTitle}>Export</div>
                <button className={styles.copyBtn} onClick={() => handleCopy('import')}>
                    {copied === 'import' ? 'Copied!' : 'Copy import'}
                </button>
                <button className={styles.copyBtn} onClick={() => handleCopy('usage')}>
                    {copied === 'usage' ? 'Copied!' : 'Copy usage snippet'}
                </button>
            </div>
        </aside>
    );
}

export default StyleEditor;
