import React, { useId } from 'react';
import PropTypes from 'prop-types';
import styles from './Checkbox.module.css';

export function Checkbox({
    checked,
    onChange,
    label,
    disabled = false,
    indeterminate = false,
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
                    type="checkbox"
                    checked={checked}
                    onChange={onChange}
                    disabled={disabled}
                    className={styles.input}
                    ref={el => { if (el) el.indeterminate = indeterminate; }}
                    aria-checked={indeterminate ? 'mixed' : checked}
                />
                <span className={[styles.checkmark, checked || indeterminate ? styles.active : ''].join(' ')}>
                    {indeterminate
                        ? <svg viewBox="0 0 12 12" fill="none"><line x1="2" y1="6" x2="10" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                        : <svg viewBox="0 0 12 12" fill="none"><polyline points="2,6 5,9 10,3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    }
                </span>
            </span>
            {label && <span className={styles.label}>{label}</span>}
        </label>
    );
}

Checkbox.propTypes = {
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool,
    indeterminate: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default Checkbox;
