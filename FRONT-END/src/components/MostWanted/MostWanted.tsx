import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Box, Grid } from "@mui/material";
import CarCard from "./CarCard";

const cars = [
    {
        title: "BMW M3 COMP",
        attribute: "Newest Arrival • 2022",
        desc: "The BMW M3 is a high-performance version of the BMW 3 Series, developed by BMW's in-house motorsport division, BMW M GmbH.",
        url: "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    },
    {
        title: "DODGE CHARGER",
        attribute: "Tried and True • 2021",
        desc: "Discover the 2022 Dodge Challenger muscle car. Explore horsepower, available all-wheel drive, SRT® Hellcat models & more.",
        url: "https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    },
    {
        title: "MERCEDES 300 SL",
        attribute: "Enthusiast Approved • 1986",
        desc: "The Mercedes-Benz 300 SL (chassis code W 198) is a two-seat sports car which was produced by Mercedes-Benz as a coupe.",
        url: "https://images.unsplash.com/photo-1474039369477-5e74ff1f0e57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA1fHxjYXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
];

const MostWanted = () => {
    return (
        <>
            <Typography align="center" variant="h3" sx={{ my: "2rem", fontFamily: "'Roboto', sans-serif;", fontWeight: "bold" }}>
                <span id="section">Most Wanted</span> Cars This Month
            </Typography>
            <Container maxWidth="lg" component="main" sx={{ my: "2rem", mx: "auto" }}>
                <Box sx={{ px: { xs: "3rem", md: "0" } }}>
                    <Grid container spacing={3} alignItems="flex-end">
                        {cars.map((car) => (
                            <Grid item key={car.title} xs={12} sm={6} md={4}>
                                <CarCard car={car} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </>
    );
};

export default MostWanted;
