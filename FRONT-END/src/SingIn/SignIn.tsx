import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Checkbox, FormControlLabel, Link, Typography } from "@mui/material";
import { ColorButton } from "../utils/Utilities";

const SignIn = () => {
    return (
        <Box component="form" noValidate autoComplete="off">
            <Box sx={{ mx: "auto", mt: "50px", mb: "150px", width: "50%" }}>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Typography variant="h4" sx={{ mb: "2rem", fontFamily: "Roboto, sans-serif", fontWeight: "bold" }}>
                        Sign In
                    </Typography>
                </Box>
                <Box>
                    <TextField fullWidth margin="normal" required id="email-input" label="Email Address" />
                    <TextField fullWidth margin="normal" required type="password" id="password-input" label="Password" />
                </Box>
                <FormControlLabel sx={{ mt: "0.5rem" }} control={<Checkbox size="medium" />} label="Remember me" />
                <ColorButton size="large" sx={{ mt: "2rem", width: "100%" }} variant="contained">
                    sign up
                </ColorButton>
                <Link sx={{ float: "left", mt: "2rem" }} href="/signup">
                    Don't have an account? Sign Up
                </Link>
            </Box>
        </Box>
    );
};

export default SignIn;
