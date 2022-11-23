import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { orange } from "@mui/material/colors";
import { Box } from "@mui/material";
import { ColorButton } from "../../utils/Utilities";

const CartItem = ({ car }: any) => {
    return (
        <Card sx={{ maxWidth: { xs: 400, sm: 500, md: 600, lg: 700 }, display: "flex" }}>
            <Box sx={{ width: "60%" }}>
                <CardMedia component="img" height="100%" image={`${car.img}`} alt="car" />
            </Box>
            <Box sx={{ width: "40%" }}>
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        sx={{ color: orange[700], fontFamily: "'Roboto', sans-serif;", fontWeight: "bold" }}
                    >
                        {car.carModel}
                    </Typography>
                    <Typography gutterBottom variant="h4" component="div" sx={{ fontFamily: "'Roboto', sans-serif;", fontWeight: "bold" }}>
                        {car.brand}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: "bold" }}>
                        <span id="section">Type: </span>
                        {car.type}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: "bold" }}>
                        <span id="section">Engine Capacity: </span>
                        {car.engCapacity} litres
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: "bold" }}>
                        <span id="section">GPS unit: </span>
                        {car.gps}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: "bold" }}>
                        <span id="section">AWD: </span>
                        {car._4x4}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: "bold" }}>
                        <span id="section">Price:</span>
                        {car.price}€
                    </Typography>
                </CardContent>
                <CardActions>
                    <ColorButton sx={{ ml: "auto" }} size="small" variant="contained">
                        remove
                    </ColorButton>
                </CardActions>
            </Box>
        </Card>
    );
};

export default CartItem;
