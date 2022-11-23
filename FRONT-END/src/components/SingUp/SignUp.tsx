import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Link, Typography } from "@mui/material";
import { ColorButton } from "../../utils/Utilities";

const SignUp = () => {
    return (
        <>
            <Box component="form" noValidate autoComplete="off">
                <Box sx={{ mx: "auto", mt: "50px", mb: "150px", width: "50%" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Typography variant="h4" sx={{ mb: "2rem", fontFamily: "Roboto, sans-serif", fontWeight: "bold" }}>
                            Sign Up
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                        <TextField sx={{ width: "50%", mr: "0.5rem" }} required id="name-input" label="First Name" />
                        <TextField sx={{ width: "50%", ml: "0.5rem" }} required id="surname-input" label="Last Name" />
                    </Box>
                    <Box>
                        <TextField fullWidth margin="normal" required id="email-input" label="Email Address" />
                        <TextField fullWidth margin="normal" required type="password" id="password-input" label="Password" />
                    </Box>
                    <ColorButton size="large" sx={{ mt: "2rem", width: "100%" }} variant="contained">
                        sign up
                    </ColorButton>

                    <Link href="/signin" sx={{ float: "right", mt: "2rem" }}>
                        Already have an account? Sign in
                    </Link>
                </Box>
            </Box>
        </>
    );
};

export default SignUp;
