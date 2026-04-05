import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import styles from './DataTable.module.css';

export function DataTable({
    columns = [],
    data = [],
    selectable = false,
    onSelectionChange,
    className = '',
    style = {},
}) {
    const [sortCol, setSortCol] = useState(null);
    const [sortDesc, setSortDesc] = useState(false);
    const [selectedRows, setSelectedRows] = useState(new Set());

    const sortedData = useMemo(() => {
        if (!sortCol) return data;
        return [...data].sort((a, b) => {
            const valA = a[sortCol];
            const valB = b[sortCol];
            if (valA < valB) return sortDesc ? 1 : -1;
            if (valA > valB) return sortDesc ? -1 : 1;
            return 0;
        });
    }, [data, sortCol, sortDesc]);

    function handleSort(key) {
        if (sortCol === key) {
            if (sortDesc) setSortCol(null);
            else setSortDesc(true);
        } else {
            setSortCol(key);
            setSortDesc(false);
        }
    }

    function toggleAll() {
        if (selectedRows.size === data.length) {
            setSelectedRows(new Set());
            if (onSelectionChange) onSelectionChange([]);
        } else {
            const all = new Set(data.map((_, i) => i));
            setSelectedRows(all);
            if (onSelectionChange) onSelectionChange(data);
        }
    }

    function toggleRow(index, row) {
        const next = new Set(selectedRows);
        if (next.has(index)) next.delete(index);
        else next.add(index);
        setSelectedRows(next);
        if (onSelectionChange) onSelectionChange(Array.from(next).map(i => sortedData[i]));
    }

    const allSelected = data.length > 0 && selectedRows.size === data.length;
    const indeterminate = selectedRows.size > 0 && selectedRows.size < data.length;

    return (
        <div className={[styles.wrapper, className].filter(Boolean).join(' ')} style={style}>
            <table className={styles.table}>
                <thead className={styles.thead}>
                    <tr>
                        {selectable && (
                            <th className={styles.checkboxCell}>
                                <input
                                    type="checkbox"
                                    className={styles.checkbox}
                                    checked={allSelected}
                                    ref={el => el && (el.indeterminate = indeterminate)}
                                    onChange={toggleAll}
                                    aria-label="Select all rows"
                                />
                            </th>
                        )}
                        {columns.map(col => (
                            <th
                                key={col.key}
                                className={[styles.th, col.sortable ? styles.sortable : ''].join(' ')}
                                onClick={() => col.sortable && handleSort(col.key)}
                                aria-sort={sortCol === col.key ? (sortDesc ? 'descending' : 'ascending') : 'none'}
                            >
                                <div className={styles.thContent}>
                                    {col.label}
                                    {col.sortable && (
                                        <span className={styles.sortIcon}>
                                            {sortCol === col.key
                                                ? (sortDesc ? '↓' : '↑')
                                                : <span className={styles.sortDefault}>↕</span>
                                            }
                                        </span>
                                    )}
                                </div>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className={styles.tbody}>
                    {sortedData.length === 0 ? (
                        <tr>
                            <td colSpan={columns.length + (selectable ? 1 : 0)} className={styles.emptyCell}>
                                No data available
                            </td>
                        </tr>
                    ) : (
                        sortedData.map((row, i) => (
                            <tr key={i} className={[styles.tr, selectedRows.has(i) ? styles.selectedRow : ''].join(' ')}>
                                {selectable && (
                                    <td className={styles.checkboxCell}>
                                        <input
                                            type="checkbox"
                                            className={styles.checkbox}
                                            checked={selectedRows.has(i)}
                                            onChange={() => toggleRow(i, row)}
                                            aria-label="Select row"
                                        />
                                    </td>
                                )}
                                {columns.map(col => (
                                    <td key={col.key} className={styles.td}>
                                        {col.render ? col.render(row[col.key], row) : row[col.key]}
                                    </td>
                                ))}
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}

DataTable.propTypes = {
    columns: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        sortable: PropTypes.bool,
        render: PropTypes.func,
    })).isRequired,
    data: PropTypes.array.isRequired,
    selectable: PropTypes.bool,
    onSelectionChange: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default DataTable;
