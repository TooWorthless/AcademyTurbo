import React, { useRef, useLayoutEffect, useState } from 'react';

const HeightMeasurer: React.FC = () => {
    const divRef = useRef<HTMLDivElement | null>(null);
    const [height, setHeight] = useState<number>(0);

    useLayoutEffect(() => {
        if (divRef.current) {
            setHeight(divRef.current.getBoundingClientRect().height);
        }
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <div ref={divRef} style={{ height: '200px', background: '#f0f0f0' }}>
                Measure me!
            </div>
            <p>Height: {height}px</p>
        </div>
    );
};

export default HeightMeasurer;