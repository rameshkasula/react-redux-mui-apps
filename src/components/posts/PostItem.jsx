import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export default function PostItem() {
  return (
    <Card sx={{ marginBottom: 12, border: "none", height: 284, width: 900 }}>
      <CardContent sx={{ display: "flex" }}>
        <CardMedia
          component="img"
          alt="green iguana"
          image="https://picsum.photos/536/354"
          sx={{ width: "47%" }}
        />
        <Box sx={{ marginX: 1 }}>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
