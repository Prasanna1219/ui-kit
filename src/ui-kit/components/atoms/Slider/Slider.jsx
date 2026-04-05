import React, { useId } from 'react';
import PropTypes from 'prop-types';
import styles from './Slider.module.css';

export function Slider({
    value = 50,
    min = 0,
    max = 100,
    step = 1,
    onChange,
    disabled = false,
    label = null,
    showValue = false,
    className = '',
    style = {},
}) {
    const id = useId();
    const percentage = Math.min(Math.max(((value - min) / (max - min)) * 100, 0), 100);

    return (
        <div className={[styles.root, disabled ? styles.disabled : '', className].filter(Boolean).join(' ')} style={style}>
            {(label || showValue) && (
                <div className={styles.header}>
                    {label && <label htmlFor={id} className={styles.label}>{label}</label>}
                    {showValue && <span className={styles.value}>{value}</span>}
                </div>
            )}
            <div className={styles.trackContainer}>
                <input
                    id={id}
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                    className={styles.input}
                    style={{ '--slider-fill': `${percentage}%` }}
                />
            </div>
        </div>
    );
}

Slider.propTypes = {
    value: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    label: PropTypes.string,
    showValue: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default Slider;
