import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { InputHandle } from "./InputHandle";


interface ControlledInputProps {
    value: string;
    onChange: (value: string) => void;
}


const ControlledInput = forwardRef<InputHandle, ControlledInputProps>(
    ({ value, onChange }, ref) => {

        const inputRef = useRef<HTMLInputElement | null>(null);

        useImperativeHandle(ref, () => ({
            focus: () => inputRef.current?.focus(),
            clear: () => {
                if (inputRef.current) {
                    inputRef.current.value = '';
                    onChange('');
                }
            }
        }))

        return (
            <input
                ref={inputRef}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                style={{ padding: '5px' }}
            />
        );
    }
);


export default ControlledInput;