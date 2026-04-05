import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './MenuBar.module.css';

export function MenuBar({
    items = [],
    logo = null,
    rightSlot = null,
    className = '',
    style = {},
}) {
    const [openIndex, setOpenIndex] = useState(null);
    const ref = useRef(null);

    useEffect(() => {
        if (openIndex === null) return;
        function handle(e) {
            if (ref.current && !ref.current.contains(e.target)) setOpenIndex(null);
        }
        document.addEventListener('mousedown', handle);
        return () => document.removeEventListener('mousedown', handle);
    }, [openIndex]);

    return (
        <header
            ref={ref}
            className={[styles.menubar, className].filter(Boolean).join(' ')}
            style={style}
            role="banner"
        >
            {logo && <div className={styles.logo}>{logo}</div>}
            <nav className={styles.nav} role="navigation">
                {items.map((item, i) => (
                    <div key={i} className={styles.navItem}>
                        <button
                            className={[styles.navBtn, openIndex === i ? styles.navBtnActive : ''].join(' ')}
                            onClick={() => setOpenIndex(openIndex === i ? null : i)}
                            onMouseEnter={() => openIndex !== null && setOpenIndex(i)}
                            aria-haspopup={item.children ? 'menu' : undefined}
                            aria-expanded={openIndex === i}
                        >
                            {item.label}
                            {item.children && (
                                <svg viewBox="0 0 16 16" fill="currentColor" width="12" height="12" style={{ marginLeft: 4 }}>
                                    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                </svg>
                            )}
                        </button>
                        {item.children && openIndex === i && (
                            <ul className={styles.submenu} role="menu">
                                {item.children.map((child, j) => (
                                    <li key={j} role="none">
                                        <button
                                            className={styles.submenuItem}
                                            role="menuitem"
                                            onClick={() => { child.onClick && child.onClick(); setOpenIndex(null); }}
                                        >
                                            {child.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </nav>
            {rightSlot && <div className={styles.right}>{rightSlot}</div>}
        </header>
    );
}

MenuBar.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.string.isRequired, children: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.string, onClick: PropTypes.func })) })),
    logo: PropTypes.node,
    rightSlot: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default MenuBar;
