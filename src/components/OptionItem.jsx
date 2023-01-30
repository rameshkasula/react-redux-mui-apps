import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import ActionTypes from "src/app/actions";

export default function BasicSelect() {
  const [age, setAge] = React.useState("");
  const dispatch = useDispatch();
  const { aioptions } = useSelector((state) => state.user);

  const handleChange = (event) => {
    const { value } = event.target;
    setAge(value);
    dispatch({
      type: ActionTypes.SET_OPTION,
      selectedOption: value?.option,
    });
  };

  return (
    <Box sx={{ minWidth: 120, marginY: 2 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Option</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Option"
          onChange={handleChange}
        >
          {aioptions.map((item) => (
            <MenuItem value={item} key={item?.name}>
              {item?.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
