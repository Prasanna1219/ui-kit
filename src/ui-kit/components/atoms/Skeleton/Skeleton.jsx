import React from 'react';
import PropTypes from 'prop-types';
import styles from './Skeleton.module.css';

export function Skeleton({
    variant = 'text',
    width,
    height,
    radius,
    className = '',
    style = {},
}) {
    return (
        <div
            className={[styles.skeleton, styles[`variant-${variant}`], className].filter(Boolean).join(' ')}
            style={{ width, height, borderRadius: radius, ...style }}
            aria-hidden="true"
        />
    );
}

Skeleton.propTypes = {
    variant: PropTypes.oneOf(['text', 'circular', 'rectangular']),
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    radius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
    style: PropTypes.object,
};

export default Skeleton;
