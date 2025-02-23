import React, { useRef, useEffect } from 'react';

const AutoFocusInput: React.FC = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <input ref={inputRef} type="text" placeholder="Start typing..." />
        </div>
    );
};

export default AutoFocusInput;