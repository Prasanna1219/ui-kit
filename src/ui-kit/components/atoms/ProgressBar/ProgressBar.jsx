import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProgressBar.module.css';

export function ProgressBar({
    value = 0,
    max = 100,
    size = 'md',
    color = 'var(--color-primary-500)',
    showLabel = false,
    className = '',
    style = {},
}) {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

    return (
        <div className={[styles.root, className].filter(Boolean).join(' ')} style={style}>
            {showLabel && (
                <div className={styles.labelRow}>
                    <span>Progress</span>
                    <span>{Math.round(percentage)}%</span>
                </div>
            )}
            <div className={[styles.track, styles[`size-${size}`]].join(' ')} role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={max}>
                <div
                    className={styles.fill}
                    style={{ width: `${percentage}%`, backgroundColor: color }}
                />
            </div>
        </div>
    );
}

ProgressBar.propTypes = {
    value: PropTypes.number,
    max: PropTypes.number,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    color: PropTypes.string,
    showLabel: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default ProgressBar;
