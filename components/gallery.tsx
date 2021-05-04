import React from 'react'
import { BlocksControls, InlineText } from 'react-tinacms-inline'

export function Gallery() {
  return (
    <section id="gallery" className="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center" style={{ position: "static" }}>
            <h2>
              <InlineText name="title" />
            </h2>
            <hr className="star-light" />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4 portfolio-item">
            <a href="#galleryModal27" className="portfolio-link" data-toggle="modal">
              <div className="caption">
                <div className="caption-content">
                  <i className="fa fa-search-plus fa-3x" />
                </div>
              </div>
              <img src="http://daydreambelievers.greenash.net.au/static/cache/thumbnails/gallery-item/27/FB_IMG_1471277189909-2016-08-15-16-09-35_400x300_fit_85.jpg" className="img-responsive" alt="New Gallery Item xoheeakbjs" />
            </a>
          </div>
          <div className="col-sm-4 portfolio-item">
            <a href="#galleryModal24" className="portfolio-link" data-toggle="modal">
              <div className="caption">
                <div className="caption-content">
                  <i className="fa fa-search-plus fa-3x" />
                </div>
              </div>
              <img src="http://daydreambelievers.greenash.net.au/static/cache/thumbnails/gallery-item/24/FullSizeRender-2016-08-15-16-03-17_400x300_fit_85.jpg" className="img-responsive" alt="New Gallery Item chtasrcqap" />
            </a>
          </div>
          <div className="col-sm-4 portfolio-item">
            <a href="#galleryModal22" className="portfolio-link" data-toggle="modal">
              <div className="caption">
                <div className="caption-content">
                  <i className="fa fa-search-plus fa-3x" />
                </div>
              </div>
              <img src="http://daydreambelievers.greenash.net.au/static/cache/thumbnails/gallery-item/22/20160414_180650-2016-05-16-23-30-21_400x300_fit_85.jpg" className="img-responsive" alt="New Gallery Item emtxjymkfz" />
            </a>
          </div>
          <div className="col-sm-4 portfolio-item">
            <a href="#galleryModal7" className="portfolio-link" data-toggle="modal">
              <div className="caption">
                <div className="caption-content">
                  <i className="fa fa-search-plus fa-3x" />
                </div>
              </div>
              <img src="http://daydreambelievers.greenash.net.au/static/cache/thumbnails/gallery-item/7/FB_IMG_1439511377398-2015-08-14-09-48-58_400x300_fit_85.jpg" className="img-responsive" alt="Singing from the Heart" />
            </a>
          </div>
          <div className="col-sm-4 portfolio-item">
            <a href="#galleryModal23" className="portfolio-link" data-toggle="modal">
              <div className="caption">
                <div className="caption-content">
                  <i className="fa fa-search-plus fa-3x" />
                </div>
              </div>
              <img src="http://daydreambelievers.greenash.net.au/static/cache/thumbnails/gallery-item/23/IMG_4323-2016-08-15-16-01-51_400x300_fit_85.JPG" className="img-responsive" alt="New Gallery Item otmrxgyewt" />
            </a>
          </div>
          <div className="col-sm-4 portfolio-item">
            <a href="#galleryModal1" className="portfolio-link" data-toggle="modal">
              <div className="caption">
                <div className="caption-content">
                  <i className="fa fa-search-plus fa-3x" />
                </div>
              </div>
              <img src="http://daydreambelievers.greenash.net.au/static/cache/thumbnails/gallery-item/1/daydream-believers-coverphoto-2015-08-11-03-14-08_400x300_fit_85.jpg" className="img-responsive" alt="The Believers" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export const galleryBlock = {
  Component: ({ index }) => (
    <BlocksControls index={index}>
      <Gallery />
    </BlocksControls>
  ),
  template: {
    label: 'Gallery',
    defaultItem: {
      title: 'Gallery',
    },
    fields: [],
  },
}
