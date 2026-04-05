import React, { useId } from 'react';
import PropTypes from 'prop-types';
import styles from './InputField.module.css';

export function InputField({
    label,
    placeholder = '',
    value,
    onChange,
    type = 'text',
    error,
    helperText,
    disabled = false,
    leftAddon,
    rightAddon,
    size = 'md',
    className = '',
    style = {},
    ...rest
}) {
    const id = useId();

    const wrapCls = [
        styles.wrapper,
        styles[`size-${size}`],
        error ? styles.hasError : '',
        disabled ? styles.disabled : '',
        className,
    ].filter(Boolean).join(' ');

    return (
        <div className={styles.root} style={style}>
            {label && <label className={styles.label} htmlFor={id}>{label}</label>}
            <div className={wrapCls}>
                {leftAddon && <span className={styles.addon}>{leftAddon}</span>}
                <input
                    id={id}
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    disabled={disabled}
                    className={styles.input}
                    aria-describedby={error ? `${id}-error` : helperText ? `${id}-helper` : undefined}
                    aria-invalid={!!error}
                    {...rest}
                />
                {rightAddon && <span className={`${styles.addon} ${styles.addonRight}`}>{rightAddon}</span>}
            </div>
            {error && <p id={`${id}-error`} className={styles.error}>{error}</p>}
            {!error && helperText && <p id={`${id}-helper`} className={styles.helper}>{helperText}</p>}
        </div>
    );
}

InputField.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    type: PropTypes.string,
    error: PropTypes.string,
    helperText: PropTypes.string,
    disabled: PropTypes.bool,
    leftAddon: PropTypes.node,
    rightAddon: PropTypes.node,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    className: PropTypes.string,
    style: PropTypes.object,
};

export default InputField;
