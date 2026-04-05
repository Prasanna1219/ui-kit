import React from 'react';
import PropTypes from 'prop-types';
import styles from './Divider.module.css';

export function Divider({
    orientation = 'horizontal',
    label = null,
    labelPosition = 'center',
    className = '',
    style = {},
}) {
    return (
        <div
            className={[
                styles.root,
                styles[orientation],
                label ? styles.hasLabel : '',
                styles[`label-${labelPosition}`],
                className
            ].filter(Boolean).join(' ')}
            style={style}
            role="separator"
            aria-orientation={orientation}
        >
            {label && orientation === 'horizontal' && <span className={styles.label}>{label}</span>}
        </div>
    );
}

Divider.propTypes = {
    orientation: PropTypes.oneOf(['horizontal', 'vertical']),
    label: PropTypes.node,
    labelPosition: PropTypes.oneOf(['left', 'center', 'right']),
    className: PropTypes.string,
    style: PropTypes.object,
};

export default Divider;
