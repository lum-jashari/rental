import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { orange } from "@mui/material/colors";

const CarCard = ({ car }: any) => {
    return (
        <Card sx={{ maxWidth: 400 }}>
            <CardMedia component="img" height="140" image={car.url} alt="car" />
            <CardContent sx={{ p: "1rem" }}>
                <Typography gutterBottom variant="caption" component="div" sx={{ color: orange[700] }}>
                    {car.attribute}
                </Typography>
                <Typography gutterBottom variant="h6" component="div" sx={{ fontFamily: "'Roboto', sans-serif;", fontWeight: "bold" }}>
                    {car.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {car.desc}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" variant="contained">
                    Share
                </Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
};

export default CarCard;
