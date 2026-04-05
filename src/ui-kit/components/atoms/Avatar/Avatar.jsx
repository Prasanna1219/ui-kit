import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Avatar.module.css';

export function Avatar({
    src,
    alt = '',
    size = 'md',
    fallback = '',
    shape = 'circle',
    className = '',
    style = {},
}) {
    const [imgError, setImgError] = useState(false);

    const cls = [
        styles.avatar,
        styles[`size-${size}`],
        styles[`shape-${shape}`],
        className,
    ].filter(Boolean).join(' ');

    const initials = fallback
        ? fallback.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase()
        : alt.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();

    return (
        <div className={cls} style={style} aria-label={alt}>
            {src && !imgError ? (
                <img src={src} alt={alt} className={styles.img} onError={() => setImgError(true)} />
            ) : (
                <span className={styles.initials} aria-hidden="true">{initials || '?'}</span>
            )}
        </div>
    );
}

Avatar.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    fallback: PropTypes.string,
    shape: PropTypes.oneOf(['circle', 'square']),
    className: PropTypes.string,
    style: PropTypes.object,
};

export default Avatar;
