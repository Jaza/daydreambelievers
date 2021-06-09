import React from 'react'
import { BlocksControls, InlineBlocks, InlineText } from 'react-tinacms-inline'
import { galleryItemBlock } from './gallery-item'

export function Gallery({ index }) {
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
        <BlocksControls index={index} focusRing={{ offset: 0 }} insetControls>
          <div className="row">
            <InlineBlocks name="galleryItems" blocks={GALLERY_BLOCKS} />
          </div>
        </BlocksControls>
      </div>
    </section>
  )
}

export const galleryBlock = {
  Component: Gallery,
  template: {
    label: 'Gallery',
    defaultItem: {
      _template: 'gallery',
      title: 'Gallery',
      galleryItems: [
        {
          _template: 'galleryItem',
          title: 'Gallery item',
        },
      ],
    },
    fields: [],
  },
}

const GALLERY_BLOCKS = {
  galleryItem: galleryItemBlock,
}
