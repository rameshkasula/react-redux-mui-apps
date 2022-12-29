import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardHeader, Divider } from "@mui/material";

export default function Page({ title, action, children }) {
  return (
    <Box
      sx={{
        marginTop: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          width: "70%",
          p: 2,
        }}
      >
        <CardHeader
          action={action ?? ""}
          title={title}
          // subheader="September 14, 2016"
        />
        <Divider />
        <CardContent>{children}</CardContent>
      </Card>
    </Box>
  );
}
