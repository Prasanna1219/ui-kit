import React, { useId } from 'react';
import PropTypes from 'prop-types';
import styles from './Toggle.module.css';

export function Toggle({
    checked,
    onChange,
    label,
    disabled = false,
    size = 'md',
    className = '',
    style = {},
}) {
    const id = useId();

    return (
        <label
            htmlFor={id}
            className={[styles.root, styles[`size-${size}`], disabled ? styles.disabled : '', className].filter(Boolean).join(' ')}
            style={style}
        >
            <span className={[styles.track, checked ? styles.on : ''].join(' ')}>
                <input id={id} type="checkbox" checked={checked} onChange={onChange} disabled={disabled} className={styles.input} role="switch" aria-checked={checked} />
                <span className={styles.thumb} />
            </span>
            {label && <span className={styles.label}>{label}</span>}
        </label>
    );
}

Toggle.propTypes = {
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool,
    size: PropTypes.oneOf(['sm', 'md']),
    className: PropTypes.string,
    style: PropTypes.object,
};

export default Toggle;
