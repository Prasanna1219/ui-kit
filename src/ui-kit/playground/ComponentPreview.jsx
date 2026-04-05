import React from 'react';
import { registry } from './componentRegistry.jsx';
import styles from './ComponentPreview.module.css';

export function ComponentPreview({ name, props, tokenValues }) {
    const entry = registry[name];
    if (!entry) return null;

    const { component: Comp, renderOverride } = entry;

    const tokenStyle = Object.fromEntries(
        Object.entries(tokenValues).filter(([, v]) => v !== '')
    );

    function renderComponent() {
        try {
            if (renderOverride) return renderOverride(props);
            return <Comp {...props} />;
        } catch (e) {
            return <div className={styles.error}>Render error: {e.message}</div>;
        }
    }

    return (
        <div className={styles.outer}>
            <div className={styles.label}>{name}</div>
            <div className={styles.canvas} style={tokenStyle}>
                <div className={styles.center}>
                    {renderComponent()}
                </div>
            </div>
        </div>
    );
}

export default ComponentPreview;
