import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Accordion.module.css';

export function Accordion({
    items = [],
    allowMultiple = false,
    className = '',
    style = {},
}) {
    const [openIndexes, setOpenIndexes] = useState(new Set());

    function toggle(index) {
        const next = new Set(openIndexes);
        if (next.has(index)) {
            next.delete(index);
        } else {
            if (!allowMultiple) next.clear();
            next.add(index);
        }
        setOpenIndexes(next);
    }

    return (
        <div className={[styles.root, className].filter(Boolean).join(' ')} style={style}>
            {items.map((item, index) => {
                const isOpen = openIndexes.has(index);
                return (
                    <div key={index} className={styles.item}>
                        <button
                            className={[styles.trigger, isOpen ? styles.triggerOpen : ''].join(' ')}
                            onClick={() => toggle(index)}
                            aria-expanded={isOpen}
                        >
                            <span className={styles.title}>{item.title}</span>
                            <svg
                                className={[styles.icon, isOpen ? styles.iconOpen : ''].join(' ')}
                                viewBox="0 0 20 20" fill="currentColor" width="20" height="20"
                            >
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                        <div
                            className={[styles.contentWrapper, isOpen ? styles.contentOpen : ''].join(' ')}
                            aria-hidden={!isOpen}
                        >
                            <div className={styles.contentInner}>
                                {item.content}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

Accordion.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({ title: PropTypes.node.isRequired, content: PropTypes.node.isRequired })).isRequired,
    allowMultiple: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default Accordion;
