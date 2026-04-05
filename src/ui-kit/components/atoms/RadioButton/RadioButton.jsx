import React, { useId } from 'react';
import PropTypes from 'prop-types';
import styles from './RadioButton.module.css';

export function RadioButton({
    value,
    checked,
    onChange,
    label,
    disabled = false,
    name,
    className = '',
    style = {},
}) {
    const id = useId();

    return (
        <label
            htmlFor={id}
            className={[styles.root, disabled ? styles.disabled : '', className].filter(Boolean).join(' ')}
            style={style}
        >
            <span className={styles.box}>
                <input
                    id={id}
                    type="radio"
                    value={value}
                    checked={checked}
                    onChange={onChange}
                    disabled={disabled}
                    name={name}
                    className={styles.input}
                />
                <span className={[styles.radio, checked ? styles.checked : ''].join(' ')}>
                    {checked && <span className={styles.dot} />}
                </span>
            </span>
            {label && <span className={styles.label}>{label}</span>}
        </label>
    );
}

RadioButton.propTypes = {
    value: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool,
    name: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default RadioButton;
