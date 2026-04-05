import React from 'react';
import PropTypes from 'prop-types';
import styles from './Pagination.module.css';

export function Pagination({
    currentPage = 1,
    totalPages = 1,
    onChange,
    className = '',
    style = {},
}) {
    const pages = [];

    // Basic range calculation for display
    if (totalPages <= 7) {
        for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
        pages.push(1);
        if (currentPage > 3) pages.push('...');
        const start = Math.max(2, currentPage - 1);
        const end = Math.min(totalPages - 1, currentPage + 1);
        for (let i = start; i <= end; i++) pages.push(i);
        if (currentPage < totalPages - 2) pages.push('...');
        pages.push(totalPages);
    }

    return (
        <nav className={[styles.root, className].filter(Boolean).join(' ')} style={style} aria-label="Pagination">
            <button
                className={styles.navBtn}
                onClick={() => onChange(currentPage - 1)}
                disabled={currentPage <= 1}
                aria-label="Previous Page"
            >
                <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
            </button>

            {pages.map((p, index) => {
                if (p === '...') return <span key={`ellipsis-${index}`} className={styles.ellipsis}>...</span>;
                return (
                    <button
                        key={p}
                        className={[styles.pageBtn, currentPage === p ? styles.active : ''].join(' ')}
                        onClick={() => onChange(p)}
                        aria-current={currentPage === p ? 'page' : undefined}
                    >
                        {p}
                    </button>
                );
            })}

            <button
                className={styles.navBtn}
                onClick={() => onChange(currentPage + 1)}
                disabled={currentPage >= totalPages}
                aria-label="Next Page"
            >
                <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
            </button>
        </nav>
    );
}

Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default Pagination;
