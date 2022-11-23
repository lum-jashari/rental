import { Button, ButtonProps, styled } from "@mui/material";
import { orange } from "@mui/material/colors";

export const pages = ["Prices", "Vehicles", "Offers", "About us"];
export const settings = ["Dashboard", "Settings", "Sign In", "Logout"];
export const ColorButton = styled(Button)<ButtonProps>(() => ({
    backgroundColor: orange[500],
    "&:hover": {
        backgroundColor: orange[700],
    },
}));
