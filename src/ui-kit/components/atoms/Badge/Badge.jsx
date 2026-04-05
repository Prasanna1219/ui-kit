import React from 'react';
import PropTypes from 'prop-types';
import styles from './Badge.module.css';

export function Badge({
    children,
    variant = 'default',
    size = 'md',
    dot = false,
    className = '',
    style = {},
}) {
    const cls = [
        styles.badge,
        styles[`variant-${variant}`],
        styles[`size-${size}`],
        className,
    ].filter(Boolean).join(' ');

    return (
        <span className={cls} style={style}>
            {dot && <span className={styles.dot} aria-hidden="true" />}
            {children}
        </span>
    );
}

Badge.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(['default', 'primary', 'success', 'warning', 'danger', 'info']),
    size: PropTypes.oneOf(['sm', 'md']),
    dot: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default Badge;
