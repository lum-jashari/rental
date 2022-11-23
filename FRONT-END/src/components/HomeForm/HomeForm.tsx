import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import { orange } from "@mui/material/colors";

const HomeForm = () => {
    return (
        <>
            <Box sx={{ display: "flex", backgroundColor: "#FFB74E", justifyContent: "space-around" }}>
                <Box sx={{ backgroundColor: "#FFC776", my: "6rem", p: "0.5rem" }}>
                    <Box component="form" noValidate autoComplete="off" sx={{ backgroundColor: "#FFFFFF" }}>
                        <Box sx={{ mx: "auto", py: "3rem", width: "80%" }}>
                            <Box>
                                <Typography
                                    variant="h4"
                                    sx={{
                                        mb: "2rem",
                                        fontFamily: "'Roboto', sans-serif;",
                                        fontWeight: "bold",
                                        fontSize: { xs: "1.5rem", lg: "2rem" },
                                    }}
                                >
                                    Renting a car has never been easier
                                </Typography>
                            </Box>
                            <Box>
                                <TextField fullWidth margin="normal" required id="email-input" label="Car Type" />
                                <TextField fullWidth margin="normal" required type="password" id="password-input" label="Location" />
                            </Box>
                            <Box sx={{ display: "flex", mt: "1rem" }}>
                                <TextField sx={{ width: "50%", mr: "0.5rem" }} required id="name-input" label="From" />
                                <TextField sx={{ width: "50%", ml: "0.5rem" }} required id="surname-input" label="To" />
                            </Box>
                            <Button
                                size="large"
                                variant="contained"
                                sx={{
                                    mt: "2rem",
                                    width: "100%",
                                    backgroundColor: orange[500],
                                    "&:hover": {
                                        backgroundColor: orange[700],
                                    },
                                }}
                            >
                                Reserve Now
                            </Button>
                        </Box>
                    </Box>
                </Box>
                <Box
                    component="img"
                    sx={{
                        height: 325,
                        my: "auto",
                        display: { xs: "none", lg: "flex" },
                    }}
                    alt="Black Tesla"
                    src="images/tesla_black.png"
                />
            </Box>
        </>
    );
};

export default HomeForm;
