import { Slide } from 'react-slideshow-image';
import '../../App.css'

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '80vh',
  width: "100%",
}

const slideImages = [
  {
    url: 'VPS/Slider/slider2.jpeg',
    caption: 'VPS-CET',
    caption1: 'Engineering & Technology'
  },
  {
    url: 'VPS/Slider/slider1.jpeg',
    caption: '',
    caption1: ''
  },
  {
    url: 'VPS/Slider/slider3.jpeg',
    caption: '',
    caption1: ''
  },
  {
    url: 'VPS/Slider/slider4.jpeg',
    caption: '',
    caption1: ''
  },
];

const Slider = () => {
  return (
    <div className="slide-container">
      <Slide indicators={true}>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              className='home_slider'
              style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}
            >
              <div className='home_slider_captions'>
                <p>{slideImage.caption}</p>
                <p>{slideImage.caption1}</p>
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}

export default Slider;
