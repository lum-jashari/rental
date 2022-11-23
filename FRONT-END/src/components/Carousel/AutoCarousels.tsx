import Carousel from "react-bootstrap/Carousel";
import { Button } from "react-bootstrap";
import "./CaroselStyle.css";

export default function AutoCarousels() {
    return (
        <>
            <Carousel className="cr">
                <Carousel.Item interval={3500}>
                    <img className="d-block w-100" src="images/porsche_hero.png" alt="First slide" />
                    <Carousel.Caption>
                        <h1 id="modern">
                            CARS ARE <span id="section">THE SCULPTURES</span>
                        </h1>
                        <Button className="btn1" variant="dark">
                            RENT NOW
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img className="d-block w-100" src="images/mustang_hero.png" alt="Second slide" />
                    <Carousel.Caption>
                        <h1 id="modern">
                            OF OUR <span id="section">EVERYDAY LIVES</span>
                        </h1>
                        <Button className="btn1" variant="dark">
                            RENT NOW
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img className="d-block w-100" src="images/audi_hero.png" alt="Third slide" />
                    <Carousel.Caption>
                        <h1 id="modern">
                            - "CHRIS <span id="section">BANGLE</span>"
                        </h1>
                        <Button className="btn1" variant="dark">
                            RENT NOW
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
}
