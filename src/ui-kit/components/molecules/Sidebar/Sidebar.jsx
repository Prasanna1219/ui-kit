import React from 'react';
import PropTypes from 'prop-types';
import styles from './Sidebar.module.css';

export function Sidebar({
    items = [],
    collapsed = false,
    onToggle,
    logo = null,
    className = '',
    style = {},
}) {
    return (
        <aside
            className={[styles.sidebar, collapsed ? styles.collapsed : '', className].filter(Boolean).join(' ')}
            style={style}
            aria-label="Sidebar navigation"
        >
            {(logo || onToggle) && (
                <div className={styles.header}>
                    {logo && <div className={styles.logo}>{logo}</div>}
                    {onToggle && (
                        <button className={styles.toggleBtn} onClick={onToggle} aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                                {collapsed
                                    ? <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                                    : <path strokeLinecap="round" strokeLinejoin="round" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                                }
                            </svg>
                        </button>
                    )}
                </div>
            )}
            <nav className={styles.nav}>
                {items.map((item, i) => (
                    <a
                        key={i}
                        href={item.href || '#'}
                        className={[styles.item, item.active ? styles.active : ''].join(' ')}
                        aria-current={item.active ? 'page' : undefined}
                        title={collapsed ? item.label : undefined}
                    >
                        {item.icon && <span className={styles.itemIcon}>{item.icon}</span>}
                        {!collapsed && <span className={styles.itemLabel}>{item.label}</span>}
                    </a>
                ))}
            </nav>
        </aside>
    );
}

Sidebar.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({ icon: PropTypes.node, label: PropTypes.string.isRequired, href: PropTypes.string, active: PropTypes.bool })),
    collapsed: PropTypes.bool,
    onToggle: PropTypes.func,
    logo: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default Sidebar;
