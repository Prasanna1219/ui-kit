import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Tooltip.module.css';

export function Tooltip({
    children,
    content,
    position = 'top',
    delay = 200,
    className = '',
    style = {},
}) {
    const [visible, setVisible] = useState(false);
    let timeout;

    function show() {
        clearTimeout(timeout);
        timeout = setTimeout(() => setVisible(true), delay);
    }

    function hide() {
        clearTimeout(timeout);
        setVisible(false);
    }

    return (
        <div
            className={[styles.wrapper, className].filter(Boolean).join(' ')}
            style={style}
            onMouseEnter={show}
            onMouseLeave={hide}
            onFocus={show}
            onBlur={hide}
        >
            {children}
            {visible && content && (
                <div className={[styles.tooltip, styles[`pos-${position}`]].join(' ')} role="tooltip">
                    {content}
                    <div className={styles.arrow} />
                </div>
            )}
        </div>
    );
}

Tooltip.propTypes = {
    children: PropTypes.node.isRequired,
    content: PropTypes.node.isRequired,
    position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    delay: PropTypes.number,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default Tooltip;
