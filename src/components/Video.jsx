import Carousel from 'react-bootstrap/Carousel';
import './../styles/Video.css';
const Video = () => {
    return(
        <>
        <Carousel className='carrousel-container'>
            <Carousel.Item interval={10000}>
                <div className="video-container">
                    <iframe className="video"
                    src="https://www.youtube.com/embed/25gB3ZSxy_Q" 
                    title="YouTube video player" 
                    
                    allow="accelerometer; 
                    autoplay; 
                    clipboard-write; 
                    encrypted-media; 
                    gyroscope; 
                    picture-in-picture; 
                    web-share" allowFullScreen
                    />
                </div>
            </Carousel.Item>
            <Carousel.Item interval={10000}>
                <div className="video-container">
                    <iframe className="video"
                    src="https://www.youtube.com/embed/N41dLosNW2A" 
                    title="YouTube video player" 
                     
                    allow="accelerometer; 
                    autoplay; 
                    clipboard-write; 
                    encrypted-media; 
                    gyroscope; 
                    picture-in-picture; 
                    web-share" allowFullScreen
                    />
                </div>
            </Carousel.Item>
        </Carousel>

        <div className='video-button'>
            <a href="https://www.youtube.com/@ugelandahuaylas8739" target="_blank" className='video-link'>Ver mas</a>
        </div>
        
        
        
        </>
    )
}
export default Video;