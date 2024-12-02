import "../styles/Events.css";
import {Carousel} from 'react-bootstrap'


const HeroSlider = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src="https://www.powerslap.com/app/uploads/2024/01/PS6_SG_BA_ENG_1920x1080-1.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src="https://www.powerslap.com/app/uploads/2023/09/PS5_SG_BA_ENG_1920x1080-1-1.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src="https://www.powerslap.com/app/uploads/2024/01/PS6_SG_BA_ENG_1920x1080-1.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src="https://www.powerslap.com/app/uploads/2023/09/PS5_SG_BA_ENG_1920x1080-1-1.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default HeroSlider;