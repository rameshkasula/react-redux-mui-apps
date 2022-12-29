import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import { useField, useFormikContext } from "formik";
import { TextField } from "@mui/material";

export default function MSelectCountries({
  name,
  options,
  label,
  handleCountryChange,
  ...otherProps
}) {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);
  const handleChange = async (event) => {
    const { value } = event.target;
    const newValues =
      (await options?.length) > 0 &&
      options.filter((item) => item?.name === value);
    await handleCountryChange(newValues);
    await setFieldValue(name, value);
  };

  const configSelect = {
    ...field,
    ...otherProps,
    select: true,
    fullWidth: true,
    margin: "normal",
    required: true,

    variant: "outlined",
    onChange: handleChange,
  };
  if (meta && meta.touched && meta.error) {
    configSelect.error = true;
    configSelect.helperText = meta.error;
  }

  return (
    <TextField {...configSelect} label={label}>
      {options.map((item, index) => (
        <MenuItem value={item?.name} key={item?.name}>
          {item?.name + " " + item?.flag}
        </MenuItem>
      ))}
    </TextField>
  );
}
