import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import Prices from "./components/pricing/Prices";
import SignUp from "./components/SingUp/SignUp";
import SignIn from "./SingIn/SignIn";

function App() {
    return (
        <>
            <BrowserRouter>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Prices" element={<Prices />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/signin" element={<SignIn />} />
                    {/* <Route path='/Vehicles' element={<Vehicles/>}/>
                    <Route path='/Offers' element={<Offers/>}/>
                    <Route path='/About' element={<About/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                    
                     */}
                    <Route
                        path="*"
                        element={
                            <main style={{ padding: "2rem", color: "red", fontSize: "x-large" }}>
                                <p>There is nothing here, comeback later...</p>
                            </main>
                        }
                    />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
