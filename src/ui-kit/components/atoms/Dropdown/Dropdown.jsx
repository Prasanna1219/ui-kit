import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Dropdown.module.css';

export function Dropdown({
    options = [],
    value,
    onChange,
    placeholder = 'Select...',
    disabled = false,
    className = '',
    style = {},
}) {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    const selected = options.find(o => o.value === value);

    useEffect(() => {
        if (!open) return;
        function handle(e) {
            if (ref.current && !ref.current.contains(e.target)) setOpen(false);
        }
        document.addEventListener('mousedown', handle);
        return () => document.removeEventListener('mousedown', handle);
    }, [open]);

    function handleSelect(opt) {
        onChange && onChange(opt.value);
        setOpen(false);
    }

    return (
        <div
            ref={ref}
            className={[styles.root, disabled ? styles.disabled : '', className].filter(Boolean).join(' ')}
            style={style}
        >
            <button
                type="button"
                className={[styles.trigger, open ? styles.open : ''].join(' ')}
                onClick={() => !disabled && setOpen(v => !v)}
                disabled={disabled}
                aria-haspopup="listbox"
                aria-expanded={open}
            >
                <span className={selected ? styles.value : styles.placeholder}>
                    {selected ? selected.label : placeholder}
                </span>
                <svg className={[styles.chevron, open ? styles.chevronUp : ''].join(' ')} viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </button>
            {open && (
                <ul className={styles.menu} role="listbox">
                    {options.map(opt => (
                        <li
                            key={opt.value}
                            className={[styles.option, opt.value === value ? styles.selected : ''].join(' ')}
                            role="option"
                            aria-selected={opt.value === value}
                            onMouseDown={() => handleSelect(opt)}
                        >
                            {opt.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

Dropdown.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.string, value: PropTypes.string })).isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default Dropdown;
