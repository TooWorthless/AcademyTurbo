import React, { useState, useRef, useEffect } from 'react';

const Timer: React.FC = () => {
    const [seconds, setSeconds] = useState<number>(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setSeconds((prev) => prev + 1);
        }, 1000);

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    const stopTimer = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h3>Elapsed Time: {seconds}s</h3>
            <button onClick={stopTimer}>Stop Timer</button>
        </div>
    );
};

export default Timer;