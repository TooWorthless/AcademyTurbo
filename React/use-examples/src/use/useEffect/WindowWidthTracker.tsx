import React, { useState, useEffect } from 'react';

const WindowWidthTracker: React.FC = () => {
    const [width, setWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        // Очистка подписки при размонтировании
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <h3>Window Width: {width}px</h3>
        </div>
    );
};

export default WindowWidthTracker;