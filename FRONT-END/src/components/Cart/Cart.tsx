import { Box, Divider, Typography } from "@mui/material";
// import CartItem from "./CartItem";
import { orange } from "@mui/material/colors";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ColorButton } from "../../utils/Utilities";

const Cart = () => {
    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <ShoppingCartIcon fontSize="large" sx={{ my: "auto", color: orange[500], mr: "0.5rem" }} />
                <Typography align="center" variant="h2" sx={{ fontFamily: "Roboto, sans-serif", fontWeight: "bold", color: orange[500], my: "2rem" }}>
                    My Cart
                </Typography>
            </Box>
            <Box sx={{ mx: "auto", display: "flex", flexDirection: "column" }}>
                {/* {data.map((car) => (
                    <Box key={car} sx={{ mx: "auto", pb: "2rem" }}>
                        <CartItem car={car} />
                    </Box>
                ))} */}
            </Box>
            <Divider sx={{ mb: "1rem" }} />
            <Box
                sx={{
                    mx: "auto",
                    maxWidth: { xs: 400, sm: 500, md: 600, lg: 700 },
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <Box>
                    <Typography sx={{ fontFamily: "Roboto, sans-serif", fontWeight: "bold" }} variant="h6">
                        Total: <span id="section">420.67$</span>
                    </Typography>
                </Box>
                <ColorButton size="small" variant="contained">
                    proceed to checkout
                </ColorButton>
            </Box>
        </>
    );
};

export default Cart;
