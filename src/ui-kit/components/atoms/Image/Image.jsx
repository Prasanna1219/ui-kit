import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Image.module.css';

export function Image({
    src,
    alt = '',
    width,
    height,
    fit = 'cover',
    radius = 'md',
    fallback = null,
    className = '',
    style = {},
}) {
    const [status, setStatus] = useState('loading');

    return (
        <div
            className={[styles.root, styles[`radius-${radius}`], className].filter(Boolean).join(' ')}
            style={{ width, height, ...style }}
        >
            {status === 'loading' && <div className={styles.skeleton} aria-hidden="true" />}
            {status === 'error' && (
                <div className={styles.fallback}>
                    {fallback || (
                        <svg viewBox="0 0 24 24" fill="none" width="32" height="32" stroke="currentColor" strokeWidth="1.5">
                            <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
                        </svg>
                    )}
                </div>
            )}
            <img
                src={src}
                alt={alt}
                className={[styles.img, styles[`fit-${fit}`], status === 'loading' ? styles.hidden : '', status === 'error' ? styles.hidden : ''].filter(Boolean).join(' ')}
                onLoad={() => setStatus('loaded')}
                onError={() => setStatus('error')}
            />
        </div>
    );
}

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    fit: PropTypes.oneOf(['cover', 'contain', 'fill']),
    radius: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'xl', 'full']),
    fallback: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default Image;
