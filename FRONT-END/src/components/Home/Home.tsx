import AutoCarousels from "../Carousel/AutoCarousels";
import HomeForm from "../HomeForm/HomeForm";
import MostWanted from "../MostWanted/MostWanted";
import Prices from "../pricing/Prices";

const Home = () => {
    return (
        <>
            <AutoCarousels />
            <HomeForm />
            <MostWanted />
            <Prices />
        </>
    );
};

export default Home;
