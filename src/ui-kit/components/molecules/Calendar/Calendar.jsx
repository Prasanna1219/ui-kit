import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Calendar.module.css';

const DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function isSameDay(a, b) {
    if (!a || !b) return false;
    return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}
function isDisabled(date, minDate, maxDate, disabledDates) {
    if (minDate && date < minDate) return true;
    if (maxDate && date > maxDate) return true;
    if (disabledDates && disabledDates.some(d => isSameDay(d, date))) return true;
    return false;
}

export function Calendar({
    value,
    onChange,
    minDate,
    maxDate,
    disabledDates = [],
    className = '',
    style = {},
}) {
    const today = new Date();
    const [viewDate, setViewDate] = useState(value || today);

    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    function prevMonth() { setViewDate(new Date(year, month - 1, 1)); }
    function nextMonth() { setViewDate(new Date(year, month + 1, 1)); }

    const cells = [];
    for (let i = 0; i < firstDay; i++) cells.push(null);
    for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d));

    return (
        <div className={[styles.calendar, className].filter(Boolean).join(' ')} style={style}>
            <div className={styles.header}>
                <button className={styles.navBtn} onClick={prevMonth} aria-label="Previous month">
                    <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                </button>
                <span className={styles.title}>{MONTHS[month]} {year}</span>
                <button className={styles.navBtn} onClick={nextMonth} aria-label="Next month">
                    <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                </button>
            </div>
            <div className={styles.grid}>
                {DAYS.map(d => <div key={d} className={styles.dayName}>{d}</div>)}
                {cells.map((date, i) => {
                    if (!date) return <div key={`e-${i}`} />;
                    const disabled = isDisabled(date, minDate, maxDate, disabledDates);
                    const selected = isSameDay(date, value);
                    const isToday = isSameDay(date, today);
                    return (
                        <button
                            key={date.toISOString()}
                            className={[
                                styles.day,
                                selected ? styles.selected : '',
                                isToday ? styles.today : '',
                                disabled ? styles.disabled : '',
                            ].filter(Boolean).join(' ')}
                            onClick={() => !disabled && onChange && onChange(date)}
                            disabled={disabled}
                            aria-label={date.toDateString()}
                            aria-pressed={selected}
                        >
                            {date.getDate()}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

Calendar.propTypes = {
    value: PropTypes.instanceOf(Date),
    onChange: PropTypes.func,
    minDate: PropTypes.instanceOf(Date),
    maxDate: PropTypes.instanceOf(Date),
    disabledDates: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
    className: PropTypes.string,
    style: PropTypes.object,
};

export default Calendar;
