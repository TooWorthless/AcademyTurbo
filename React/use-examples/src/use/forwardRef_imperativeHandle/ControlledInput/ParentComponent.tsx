import React, {useState, useRef, forwardRef} from "react";
import { InputHandle } from "./InputHandle";
import ControlledInput from "./ControlledInput";


const ParentComponent: React.FC = () => {
    const [text, setText] = useState<string>('');

    const inputRef = useRef<InputHandle | null>(null);

    return (
        <div style={{ padding: '20px' }}>
            <ControlledInput ref={inputRef} value={text} onChange={setText}/>
            <button onClick={() => inputRef.current?.focus()}>Focus</button>
            <button onClick={() => inputRef.current?.clear()}>Clear</button>
        </div>
    );
};

export default ParentComponent;