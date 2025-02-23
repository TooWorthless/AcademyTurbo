import React, { useRef, useLayoutEffect } from 'react';


interface AutoScrollProps {
    items: string[]
}


const AutoScroll: React.FC<AutoScrollProps> = ({ items }) => {
    const listRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        listRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    }, [items]);

    return (
        <div ref={listRef} style={{ maxHeight: "150px", overflowY: "auto" }}>
            {items.map((item, i) => (
                <p key={i}>{item}</p>
            ))}
        </div>
    );
};

export default AutoScroll;
