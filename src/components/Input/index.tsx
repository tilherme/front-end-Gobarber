import React, {InputHTMLAttributes, useEffect, useState, useRef, useCallback} from 'react';

import {IconBaseProps} from 'react-icons'
import {  useField } from '@unform/core';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
    icon: React.ComponentType<IconBaseProps>;
}
const Input: React.FC<InputProps> = ({name, icon: Icon,...res}) => {
    const InputRef = useRef<HTMLInputElement>(null);
    const[isFocused, setIsFocused] = useState(false);
    const[isField, setIsField] = useState(false);
    const { fieldName, defaultValue, error, registerField } = useField(name);
    const inputFocus= useCallback(() =>{
        setIsFocused(true);
    },[])
    const handleInputBlur = useCallback(() =>{
        setIsFocused(false);


        setIsField(!!InputRef.current?.value);

    }, []);
    useEffect(()=>{
        registerField({
            name: fieldName,
            ref: InputRef.current,
            path: 'value',
        });

    },[fieldName,registerField]) 
    return (
        <Container isField={isField} isFocused={isFocused} >
     {Icon &&   <Icon size={20} />}
     <input 
     onBlur={handleInputBlur}
     onFocus={inputFocus}
     defaultValue={defaultValue}  
     ref={InputRef} 
     {...res}/>
     </Container>
    )
};

export default Input;