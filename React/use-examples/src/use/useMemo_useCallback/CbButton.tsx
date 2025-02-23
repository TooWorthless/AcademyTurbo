import React, { useState, useCallback } from 'react';

const ButtonWithCallback: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    const handleClick = useCallback(() => {
        setCount((prev) => prev + 1);
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <p>Count: {count}</p>
            <button onClick={handleClick}>Increment</button>
        </div>
    );
};

export default ButtonWithCallback;