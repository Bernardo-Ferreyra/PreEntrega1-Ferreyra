import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './styles/homecarousel.css'
import { Link } from 'react-router-dom';

const HomeCarousel = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="carouselhome">
      <Carousel.Item className='carouselhome'>
        <Link to={'/categoria/Guitarras'}>
          <img
            className="d-block w-100 img-carousel"
            src="https://res.cloudinary.com/dmzrvnlgb/image/upload/v1673789454/closeup-black-electric-guitar-on-dark-background_eq2heh.jpg"
            alt="First slide"
            />
          <Carousel.Caption>
            <h3>Guitarras Electricas</h3>
            <p>Modelos exclusivos de varias marcas</p>
          </Carousel.Caption>
        </Link>
      </Carousel.Item>

      <Carousel.Item className='carouselhome'>
        <Link to={'/categoria/Bajos'}>
          <img
            className="d-block w-100 img-carousel"
            src="https://res.cloudinary.com/dmzrvnlgb/image/upload/v1673789575/close-up-of-bass-guitar-in-the-hands-of-musician-in-the-process-of-playing_ocl4og.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Bajos Electricos</h3>
            <p>Bajos de diferentes marcas y echos a medida</p>
          </Carousel.Caption>
        </Link>
      </Carousel.Item>

      <Carousel.Item className='carouselhome'>
        <Link to={'/categoria/Amplificadores'}>
          <img
            className="d-block w-100 img-carousel"
            src="https://res.cloudinary.com/dmzrvnlgb/image/upload/v1673789739/jack-audio-connector-being-plugged-into-socket-on-an-audio-device-for-music-audio_ckhnx1.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Amplificadores</h3>
            <p>Nunca son suficientes watts, eleji el tuyo</p>
          </Carousel.Caption>
        </Link>
      </Carousel.Item>
    </Carousel>
  )
}

export default HomeCarousel
