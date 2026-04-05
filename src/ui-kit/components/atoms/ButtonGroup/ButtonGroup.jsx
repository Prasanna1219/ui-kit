import React from 'react';
import PropTypes from 'prop-types';
import styles from './ButtonGroup.module.css';

export function ButtonGroup({
    children,
    orientation = 'horizontal',
    className = '',
    style = {},
}) {
    return (
        <div
            className={[styles.group, styles[orientation], className].filter(Boolean).join(' ')}
            style={style}
            role="group"
        >
            {children}
        </div>
    );
}

ButtonGroup.propTypes = {
    children: PropTypes.node.isRequired,
    orientation: PropTypes.oneOf(['horizontal', 'vertical']),
    className: PropTypes.string,
    style: PropTypes.object,
};

export default ButtonGroup;
