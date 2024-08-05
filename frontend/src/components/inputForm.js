import React from 'react';
import {  useController } from 'react-hook-form';

const Inputform = ( {control, ...props} ) => {
    const { field } = useController({
        control,
        name: props.name,
        defaultValue: '',
    });
    return(
        <input type="text" 
        {...field}
        {...props}
        />
    );
};
export default Inputform;