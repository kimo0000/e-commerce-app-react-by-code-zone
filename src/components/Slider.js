import './Slider.css';
import Image1 from './imgs/01.jpg';
import Image2 from './imgs/02.jpg';
import Image3 from './imgs/03.jpg';
import Image4 from './imgs/04.jpg';
import Image5 from './imgs/05.jpg';

function Slider() {
    return (
      <>
        <div id="carouselExample" className="carousel slide slider">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={Image1} className="d-block w-100 image_slider" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={Image2} className="d-block w-100 image_slider" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={Image3} className="d-block w-100 image_slider" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={Image4} className="d-block w-100 image_slider" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={Image5} className="d-block w-100 image_slider" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </>
    );
}

export default Slider;