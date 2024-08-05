import React from 'react';
import {  useController } from 'react-hook-form';

const Textareaform = ( {control, ...props} ) => {
    const { field } = useController({
        control,
        name: props.name,
        defaultValue: '',
    });
    return(
        <textarea  
        {...field}
        {...props}
        />
    );
};
export default Textareaform;