import React, { Children } from 'react';
import PropTypes from 'prop-types';
import styles from './Breadcrumbs.module.css';

export function Breadcrumbs({
    children,
    separator = <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>,
    className = '',
    style = {},
}) {
    const items = Children.toArray(children).filter(Boolean);

    return (
        <nav aria-label="Breadcrumb" className={[styles.root, className].filter(Boolean).join(' ')} style={style}>
            <ol className={styles.list}>
                {items.map((item, index) => {
                    const isLast = index === items.length - 1;
                    return (
                        <li key={index} className={styles.item} aria-current={isLast ? 'page' : undefined}>
                            {item}
                            {!isLast && <span className={styles.separator} aria-hidden="true">{separator}</span>}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}

export function BreadcrumbItem({ href, onClick, children, className = '' }) {
    if (href) {
        return <a href={href} className={[styles.link, className].join(' ')} onClick={onClick}>{children}</a>;
    }
    if (onClick) {
        return <button className={[styles.button, className].join(' ')} onClick={onClick}>{children}</button>;
    }
    return <span className={[styles.text, className].join(' ')}>{children}</span>;
}

Breadcrumbs.propTypes = {
    children: PropTypes.node.isRequired,
    separator: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
};

BreadcrumbItem.propTypes = {
    href: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};
