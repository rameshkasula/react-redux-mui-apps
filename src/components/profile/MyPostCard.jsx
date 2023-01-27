import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { Stack } from "@mui/material";

export default function MediaCard({ data }) {
  return (
    <Card>
      <CardMedia sx={{ height: 140 }} image={data?.file} title={data?.title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data?.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Click to Read More
        </Typography>
      </CardContent>
      <CardActions>
        <Stack direction={"row"} spacing={2} alignItems={"center"}>
          <ThumbUpIcon color="inherit" />
          <Typography>{Number(data?.likes?.length)}</Typography>
        </Stack>
        <Button
          size="small"
          component={Link}
          to={`/posts/view?id=${data?._id}`}
          sx={{ ml: 4 }}
        >
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}
