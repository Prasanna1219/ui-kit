import React, { useState } from 'react';
import '../../ui-kit/styles/globals.css';
import { registry, groups } from './componentRegistry.jsx';
import { ComponentPreview } from './ComponentPreview.jsx';
import { StyleEditor } from './StyleEditor.jsx';
import styles from './Playground.module.css';

export function Playground() {
    const firstComponent = Object.keys(registry)[0];
    const [selected, setSelected] = useState(firstComponent);
    const [propValues, setPropValues] = useState({});
    const [tokenValues, setTokenValues] = useState({});

    const entry = registry[selected];

    function getProps() {
        return { ...entry.defaults, ...propValues };
    }

    function handleSelect(name) {
        setSelected(name);
        setPropValues({});
        setTokenValues({});
    }

    function handlePropChange(key, value) {
        setPropValues(prev => ({ ...prev, [key]: value }));
    }

    function handleTokenChange(varName, value) {
        setTokenValues(prev => ({ ...prev, [varName]: value }));
    }

    return (
        <div className={styles.layout}>
            <nav className={styles.sidebar}>
                <div className={styles.sidebarHeader}>
                    <span className={styles.sidebarTitle}>UI Kit</span>
                </div>
                {Object.entries(groups).map(([group, names]) => (
                    <div key={group} className={styles.group}>
                        <div className={styles.groupLabel}>{group}</div>
                        {names.map(name => (
                            <button
                                key={name}
                                className={[styles.navItem, selected === name ? styles.navItemActive : ''].join(' ')}
                                onClick={() => handleSelect(name)}
                            >
                                {name}
                            </button>
                        ))}
                    </div>
                ))}
            </nav>

            <main className={styles.main}>
                <ComponentPreview
                    name={selected}
                    props={getProps()}
                    tokenValues={tokenValues}
                />
            </main>

            <StyleEditor
                name={selected}
                schema={entry.schema}
                props={getProps()}
                onPropChange={handlePropChange}
                tokenOverrides={entry.tokenOverrides || []}
                tokenValues={tokenValues}
                onTokenChange={handleTokenChange}
            />
        </div>
    );
}

export default Playground;
