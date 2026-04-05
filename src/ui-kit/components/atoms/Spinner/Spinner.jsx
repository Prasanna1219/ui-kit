import React from 'react';
import PropTypes from 'prop-types';
import styles from './Spinner.module.css';

export function Spinner({
    size = 'md',
    color = 'currentColor',
    className = '',
    style = {},
}) {
    return (
        <svg
            className={[styles.spinner, styles[`size-${size}`], className].filter(Boolean).join(' ')}
            style={{ color, ...style }}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-busy="true"
            role="progressbar"
        >
            <circle className={styles.track} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path
                className={styles.head}
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
        </svg>
    );
}

Spinner.propTypes = {
    size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
    color: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default Spinner;
