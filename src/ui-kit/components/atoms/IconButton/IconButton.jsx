import React from 'react';
import PropTypes from 'prop-types';
import styles from './IconButton.module.css';

export function IconButton({
    icon,
    variant = 'primary',
    size = 'md',
    disabled = false,
    shape = 'rounded',
    onClick,
    className = '',
    style = {},
    'aria-label': ariaLabel,
    ...rest
}) {
    const cls = [
        styles.iconBtn,
        styles[`variant-${variant}`],
        styles[`size-${size}`],
        styles[`shape-${shape}`],
        className,
    ].filter(Boolean).join(' ');

    return (
        <button
            type="button"
            className={cls}
            disabled={disabled}
            onClick={onClick}
            aria-label={ariaLabel}
            style={style}
            {...rest}
        >
            <span className={styles.icon}>{icon}</span>
        </button>
    );
}

IconButton.propTypes = {
    icon: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(['primary', 'secondary', 'ghost', 'danger']),
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    disabled: PropTypes.bool,
    shape: PropTypes.oneOf(['rounded', 'circle', 'square']),
    onClick: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
    'aria-label': PropTypes.string.isRequired,
};

export default IconButton;
