import {Typography, Box} from "@mui/material";
import React from "react";

export default function MTypography({title, titleValue}) {
    return (
        <Box sx={{ marginBottom: "20px"}}>
            {!!title && !!titleValue && (
                <Typography variant="h5" component={"div"} gutterBottom sx={{ display: "flex"}}>
                    <span style={{ width: 180, marginRight: 20, opacity: 0.7}}>{title}</span>
                    <span style={{ fontWeight: 'bold'}}>{titleValue}</span>
                </Typography>
            )}
        </Box>
    );
}
