import React, { useState, Children, isValidElement } from 'react';
import PropTypes from 'prop-types';
import styles from './Tabs.module.css';

export function Tab({ children, label, disabled }) {
    return <div className={styles.tabPanel}>{children}</div>;
}

export function Tabs({
    children,
    defaultIndex = 0,
    onChange,
    variant = 'line',
    className = '',
    style = {},
}) {
    const [activeIndex, setActiveIndex] = useState(defaultIndex);

    const tabs = Children.toArray(children).filter(child => isValidElement(child) && child.type === Tab);

    function handleTabClick(index, disabled) {
        if (disabled) return;
        setActiveIndex(index);
        if (onChange) onChange(index);
    }

    return (
        <div className={[styles.root, styles[`variant-${variant}`], className].filter(Boolean).join(' ')} style={style}>
            <div className={styles.tabList} role="tablist">
                {tabs.map((tab, idx) => (
                    <button
                        key={idx}
                        className={[
                            styles.tabBtn,
                            activeIndex === idx ? styles.active : '',
                            tab.props.disabled ? styles.disabled : ''
                        ].filter(Boolean).join(' ')}
                        role="tab"
                        aria-selected={activeIndex === idx}
                        disabled={tab.props.disabled}
                        onClick={() => handleTabClick(idx, tab.props.disabled)}
                    >
                        {tab.props.label}
                    </button>
                ))}
            </div>
            <div className={styles.tabContent}>
                {tabs[activeIndex]}
            </div>
        </div>
    );
}

Tabs.propTypes = {
    children: PropTypes.node.isRequired,
    defaultIndex: PropTypes.number,
    onChange: PropTypes.func,
    variant: PropTypes.oneOf(['line', 'pills']),
    className: PropTypes.string,
    style: PropTypes.object,
};
Tab.propTypes = {
    children: PropTypes.node.isRequired,
    label: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
};

export default Tabs;
