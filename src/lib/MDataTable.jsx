import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";

export default function MDataTable({ rows, columns }) {
  return (
    <React.Fragment>
      <Box sx={{ width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          disableSelectionOnClick
          disableColumnMenu
          disableColumnSelector
          rowsPerPageOptions={[5, 25, 50]}
          getRowId={(row) => row?._id}
          autoHeight
          autoPageSize
        />
      </Box>
    </React.Fragment>
  );
}
