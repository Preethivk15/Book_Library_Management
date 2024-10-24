import React from 'react'
import './ImageSlider.css'
import { Carousel } from 'react-bootstrap'

function ImageSlider() {
    return (
        <div className='slider'>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://c4.wallpaperflare.com/wallpaper/479/101/113/germany-saxony-gorlitz-hall-historical-literature-wallpaper-preview.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                       
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://st.depositphotos.com/1032932/3463/i/450/depositphotos_34635755-stock-photo-library.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://wallpaper.forfun.com/fetch/64/645d7ccf870e16b0bc908b2dabdd6f8c.jpeg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                       
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default ImageSlider
