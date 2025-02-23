import React, { useState, useRef, useEffect } from 'react';

const CounterWithPrevious: React.FC = () => {
    const [count, setCount] = useState<number>(0);
    const prevCountRef = useRef<number>(0);

    useEffect(() => {
        prevCountRef.current = count;
    }, [count]);

    return (
        <div style={{ padding: '20px' }}>
            <h3>Current Count: {count}</h3>
            <h3>Previous Count: {prevCountRef.current}</h3>
            <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
        </div>
    );
};

export default CounterWithPrevious;