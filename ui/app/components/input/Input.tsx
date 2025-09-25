import React from 'react';
import type { InputProps } from './types';

function Input(props: InputProps) {
    return (
        <>
            {
                props.label &&
                <label htmlFor='#input'>
                    { props.label }
                </label>
            }
            <input
                id="input"
                placeholder={props.placeholder}
                className='px-4 py-2 border-gray-300 bg-white text-black'
                onChange={props.onChange}
                value={props.value}
            />
        </>
    )
}

export default Input;