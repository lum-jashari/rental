import AutoCarousels from "./components/Carousel/AutoCarousels";
import Footer from "./components/Footer/Footer";
import HomeForm from "./components/HomeForm/HomeForm";
import MostWanted from "./components/MostWanted/MostWanted";
import Navigation from "./components/Navigation/Navigation";
import Prices from "./components/pricing/Prices";

function App() {
    return (
        <>
            <Navigation />
            <AutoCarousels />
            <HomeForm />
            <MostWanted />
            <Prices />
            <Footer />
        </>
    );
}

export default App;
