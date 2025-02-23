import React, { useRef, useLayoutEffect, useState } from 'react';

const FadeInBox: React.FC = () => {
    const boxRef = useRef<HTMLDivElement | null>(null);
    const [visible, setVisible] = useState<boolean>(false);

    useLayoutEffect(() => {
        if (boxRef.current && visible) {
            boxRef.current.style.opacity = '0';
            boxRef.current.style.transition = 'opacity 1s';
            boxRef.current.style.opacity = '1';
        }
    }, [visible]);

    return (
        <div style={{ padding: '20px' }}>
            <button onClick={() => setVisible(true)}>Show Box</button>
            {visible && (
                <div ref={boxRef} style={{ width: '100px', height: '100px', background: 'lightblue' }} />
            )}
        </div>
    );
};

export default FadeInBox;