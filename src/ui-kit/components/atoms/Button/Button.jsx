import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

export function Button({
    children,
    variant = 'primary',
    size = 'md',
    disabled = false,
    loading = false,
    leftIcon = null,
    rightIcon = null,
    onClick,
    type = 'button',
    className = '',
    style = {},
    ...rest
}) {
    const cls = [
        styles.btn,
        styles[`variant-${variant}`],
        styles[`size-${size}`],
        loading ? styles.loading : '',
        className,
    ].filter(Boolean).join(' ');

    return (
        <button
            type={type}
            className={cls}
            disabled={disabled || loading}
            onClick={onClick}
            style={style}
            aria-busy={loading}
            {...rest}
        >
            {loading && (
                <svg className={styles.spinner} viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="32" strokeDashoffset="10" />
                </svg>
            )}
            {!loading && leftIcon && <span className={styles.iconLeft}>{leftIcon}</span>}
            <span>{children}</span>
            {!loading && rightIcon && <span className={styles.iconRight}>{rightIcon}</span>}
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(['primary', 'secondary', 'ghost', 'danger']),
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    onClick: PropTypes.func,
    type: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default Button;
