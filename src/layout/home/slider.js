import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const Slideshow = () => {
  const images = [
    'https://k.nooncdn.com/cms/pages/20210608/337dde6cb9efeb095d41179b9c04c4d1/en_slider-01.png',
    'https://k.nooncdn.com/cms/pages/20210607/87c6b70c26ff90ae30bdf6580a38aa39/en_banner-01.gif',
    'https://k.nooncdn.com/cms/pages/20201020/79a2e38e27583a1a5db92d21097f3b8e/en_slider-emaar-uae-emaar.png',
    'https://k.nooncdn.com/mon/1623526573335-ckpu5sxef0b5g1brboca2jhze.png',
    'https://k.nooncdn.com/cms/pages/20210614/686de682605c6753366569a273c7fc3a/en_slider-01.gif',
    'https://k.nooncdn.com/cms/pages/20210613/4dbf23acb27455e01e73c514bed52aca/en_slider.png',
    'https://k.nooncdn.com/cms/pages/20210614/557d21bf8f395c06ac25a0779f27a6fa/en_slider-01.png',
  
  
  ];

  const zoomInProperties = {
    indicators: true,
    scale: 1.4
  }
  return (
    <div>
      <Zoom {...zoomInProperties}>
        {images.map((each, index) => (
          <div key={index} style={{width: "100%"}}>
            <img style={{ objectFit: "cover", width: "100%" }} src={each} />
          </div>
        ))}
      </Zoom>
    </div>
  )
}

export default Slideshow;