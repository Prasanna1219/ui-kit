import { useState, useRef, useEffect, useCallback } from 'react';

export function useDropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const triggerRef = useRef(null);
    const menuRef = useRef(null);

    const toggle = useCallback(() => setIsOpen(v => !v), []);
    const close = useCallback(() => setIsOpen(false), []);
    const open = useCallback(() => setIsOpen(true), []);

    useEffect(() => {
        if (!isOpen) return;
        function handleClick(e) {
            if (
                triggerRef.current && !triggerRef.current.contains(e.target) &&
                menuRef.current && !menuRef.current.contains(e.target)
            ) {
                close();
            }
        }
        function handleKey(e) {
            if (e.key === 'Escape') close();
        }
        document.addEventListener('mousedown', handleClick);
        document.addEventListener('keydown', handleKey);
        return () => {
            document.removeEventListener('mousedown', handleClick);
            document.removeEventListener('keydown', handleKey);
        };
    }, [isOpen, close]);

    return { isOpen, toggle, open, close, triggerRef, menuRef };
}

export default useDropdown;
