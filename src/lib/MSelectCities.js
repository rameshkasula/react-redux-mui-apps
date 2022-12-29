import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import {useField, useFormikContext} from "formik";
import {TextField} from "@mui/material";

export default function MSelectCities({name, options, label, ...otherProps}) {
    const {setFieldValue} = useFormikContext();
    const [field, meta] = useField(name);

    const handleChange = (event) => {
        setFieldValue(name, event.target.value);
    };

    const configSelect = {
        ...field,
        ...otherProps,
        select: true,
        fullWidth: true,
        margin: "normal",
        required: true,

        variant: "outlined",
        onChange: handleChange
    };
    if (meta && meta.touched && meta.error) {
        configSelect.error = true;
        configSelect.helperText = meta.error;
    }

    return (
        <TextField {...configSelect} label={label}>
            {options.map((item, i) => (
                <MenuItem value={item?.name} key={item?.name + String(i)}>
                    {item?.name}
                </MenuItem>
            ))}
        </TextField>
    );
}
