import React from 'react';
import type { ButtonProps } from './types';

function Button(props: ButtonProps) {
    return (
        <button
            type={props.type}
            className='p-2 bg-blue-500'
            onClick={props.onClick}>
            { props.children }
        </button>
    )
}

export default Button;