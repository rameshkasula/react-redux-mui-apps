import * as React from "react";
import Box from "@mui/material/Box";
import { Card, CssBaseline, Typography } from "@mui/material";
import MyPosts from "./MyPosts";

export default function ProfileAccount({ data }) {
  return (
    <Card sx={{ width: "100%" }}>
      <Box
        sx={{
          marginY: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          component={"img"}
          src={data?.profile_image ?? "https://picsum.photos/536/354"}
          alt={data?.userName}
          width={"200px"}
          height={"200px"}
          sx={{ marginY: 2 }}
        ></Box>
        <Typography gutterBottom variant="body2" component={"p"}>
          {data?.userName}
        </Typography>
        <Typography gutterBottom variant="body2" component={"p"}>
          {data?.fullName}
        </Typography>
        <Typography gutterBottom variant="body2" component={"p"}>
          {data?.email}
        </Typography>
      </Box>
      <Typography gutterBottom variant="h6" component={"h4"} textAlign="center">
        {"My Posts"}
      </Typography>
      <CssBaseline />
      <Box
        sx={{
          marginY: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <MyPosts />
      </Box>
    </Card>
  );
}
