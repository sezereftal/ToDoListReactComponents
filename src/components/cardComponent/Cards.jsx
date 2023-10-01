import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function Cards({ task }) {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Card sx={{ width: 220, mb: 5 }}>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            title gelecek
          </Typography>
          <Typography variant="body4" color="text.secondary">
            todo gelecek
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Cards;
