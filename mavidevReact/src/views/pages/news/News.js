import { CCarousel, CCarouselItem, CCarouselCaption, CImage } from '@coreui/react'
import React from 'react'

const News = () => {
  return (
    <>
      <CCarousel controls indicators>
        <CCarouselItem>
          <CImage
            className="d-block w-100"
            src="https://images.pexels.com/photos/415687/pexels-photo-415687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="slide 1"
          />
          <CCarouselCaption className="d-none d-md-block">
            <h5>Citizen Of The Country</h5>
            <p></p>
          </CCarouselCaption>
          </CCarouselItem>
          <CCarouselItem>
          <CImage
            className="d-block w-100"
            src="https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="slide 1"
          />
          <CCarouselCaption className="d-none d-md-block">
            <h5>Citizen Of The Country</h5>
            <p></p>
          </CCarouselCaption>
          </CCarouselItem>
          <CCarouselItem>
          <CImage
            className="d-block w-100"
            src="https://images.pexels.com/photos/358312/pexels-photo-358312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="slide 1"
          />
          <CCarouselCaption className="d-none d-md-block">
            <h5>Citizen Of The Country</h5>
            <p></p>
          </CCarouselCaption>
          </CCarouselItem>
      </CCarousel>
    </>
  )
}

export default News
