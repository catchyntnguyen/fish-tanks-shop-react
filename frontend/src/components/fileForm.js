import React from 'react';
import { useController } from 'react-hook-form';

const Fileform = ({ control, name, ...props }) => {
    const {
        field: { ref, onChange, ...inputProps }
    } = useController({
        control,
        name,
        defaultValue: null,
    });

    const handleFileChange = (event) => {
        onChange(event.target.files[0]);  
    };

    return (
        <input
            type="file"
            onChange={handleFileChange}
            ref={ref}
            {...inputProps}
            {...props}
            accept="image/*"
        />
    );
};

export default Fileform;
