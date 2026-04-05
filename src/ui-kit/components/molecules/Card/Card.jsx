import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.css';

export function Card({
    children,
    padding = 'md',
    shadow = 'md',
    radius = 'lg',
    hoverable = false,
    onClick,
    className = '',
    style = {},
}) {
    const cls = [
        styles.card,
        styles[`padding-${padding}`],
        styles[`shadow-${shadow}`],
        styles[`radius-${radius}`],
        hoverable ? styles.hoverable : '',
        onClick ? styles.clickable : '',
        className,
    ].filter(Boolean).join(' ');

    return (
        <div
            className={cls}
            style={style}
            onClick={onClick}
            role={onClick ? 'button' : undefined}
            tabIndex={onClick ? 0 : undefined}
            onKeyDown={onClick ? e => e.key === 'Enter' && onClick(e) : undefined}
        >
            {children}
        </div>
    );
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    padding: PropTypes.oneOf(['none', 'sm', 'md', 'lg']),
    shadow: PropTypes.oneOf(['none', 'sm', 'md', 'lg']),
    radius: PropTypes.oneOf(['md', 'lg', 'xl']),
    hoverable: PropTypes.bool,
    onClick: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default Card;
