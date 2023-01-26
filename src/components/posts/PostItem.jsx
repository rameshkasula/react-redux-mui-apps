import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function PostItem({ data }) {
  return (
    <Card
      component={Link}
      to={`/posts/view?id=${data?._id}`}
      sx={{
        marginBottom: 2,
        textDecoration: "none",
        color: "#fffff",
        border: "none",
        height: 284,
        width: 900,
      }}
    >
      <CardContent sx={{ display: "flex" }}>
        <CardMedia
          component="img"
          alt={data?.title}
          image={data?.file}
          sx={{ width: "44%", height: "100%" }}
        />
        <Box sx={{ marginX: 1 }}>
          <Typography gutterBottom variant="h5" component="div">
            {data?.title}
          </Typography>
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: data.message }}
          />

          <Typography gutterBottom variant="p" component="p">
            {new Date(data?.createdAt).toLocaleString()}
          </Typography>

          <Typography gutterBottom variant="p" component="p">
            Posted By: {data?.postedBy?.fullName}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
