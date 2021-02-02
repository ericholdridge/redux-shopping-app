import React from "react";
import {useFormContext, Controller} from "react-hook-form"

const CustomTextField = () => {
    return(
        <div>
          <Controller 
            control={control}
            fullWidth
            name={name}
            label={label}
            required={required}
          />
        </div>
    );
};

export default CustomTextField;