import Carousel from 'react-bootstrap/Carousel';
import './country-carousel.scss';

export const CountryCarousel = () => {
    return (
        <div className='carousel-container'>
          <Carousel>
            <Carousel.Item>
              <img src='https://placehold.co/600x400/000000/FFFFFF/png' />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src='https://placehold.co/600x400/000000/FFFFFF/png' />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src='https://placehold.co/600x400/000000/FFFFFF/png' />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      );
}