import React, {InputHTMLAttributes, useEffect, useRef} from 'react';

import {IconBaseProps} from 'react-icons'
import {  useField } from '@unform/core';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
    icon: React.ComponentType<IconBaseProps>;
}
const Input: React.FC<InputProps> = ({name, icon: Icon,...res}) => {
    const InputRef = useRef(null);
    const { fieldName, defaultValue, error, registerField } = useField(name);

    useEffect(()=>{
        registerField({
            name: fieldName,
            ref: InputRef.current,
            path: 'value',
        });

    },[fieldName,registerField]) 
    return (
        <Container>
     {Icon &&   <Icon size={20} />}
     <input ref={InputRef} {...res}/>
     </Container>
    )
};

export default Input;