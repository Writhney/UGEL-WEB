import Carousel from 'react-bootstrap/Carousel';
import '../styles/Slider.css';
const Slider = () => {
    return(
        <>
    <Carousel>
      <Carousel.Item interval={2000}>
        <div className='container-carousel-img'>
          <img
          className="d-block carousel-img-style"
          src="https://i.postimg.cc/52smcy8r/Slider1.jpg/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 className='captions-title'>UGEL | ANDAHUAYLAS</h1>
          <p className='captions-subtitle'>Unidad de Gestión Educativa Local Andahuaylas</p>
        </Carousel.Caption>  
        </div>
        
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <div className='container-carousel-img'>
        <img
          className="d-block carousel-img-style"
          src="https://i.postimg.cc/4xf1FVHt/Slider2.jpg/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h1 className='captions-title'>UGEL | ANDAHUAYLAS</h1>
          <p className='captions-subtitle'>Unidad de Gestión Educativa Local Andahuaylas</p>
        </Carousel.Caption>   
        </div>

      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <div className='container-carousel-img'>
        <img
          className="d-block carousel-img-style"
          src="https://i.postimg.cc/V6C9bF2y/Slider3.jpg/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />
        <Carousel.Caption>
        <h1 className='captions-title'>UGEL | ANDAHUAYLAS</h1>
          <p className='captions-subtitle'>Unidad de Gestión Educativa Local Andahuaylas</p>
        </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <div className='container-carousel-img'>
        <img
          className="d-block carousel-img-style"
          src="https://i.postimg.cc/RVQRRXh4/Slider4.jpg/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />
        <Carousel.Caption>
        <h1 className='captions-title'>UGEL | ANDAHUAYLAS</h1>
          <p className='captions-subtitle'>Unidad de Gestión Educativa Local Andahuaylas</p>
        </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <div className='container-carousel-img'>
        <img
          className="d-block carousel-img-style"
          src="https://i.postimg.cc/9fStMk8t/Slider5.jpg/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />
        <Carousel.Caption>
        <h1 className='captions-title'>UGEL | ANDAHUAYLAS</h1>
          <p className='captions-subtitle'>Unidad de Gestión Educativa Local Andahuaylas</p>
        </Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>
        
        </>
    )
}
export default Slider;



