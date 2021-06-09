import React from 'react'
import { BlocksControls, InlineImage } from 'react-tinacms-inline'

export function GalleryItem({ index, title }) {
  return (
    <div className="col-sm-4 portfolio-item">
      <a href={`#galleryModal${index + 1}`} className="portfolio-link" data-toggle="modal">
        <div className="caption">
          <div className="caption-content">
            <i className="fa fa-search-plus fa-3x" />
          </div>
        </div>
        <InlineImage
          name="photoImage"
          parse={media => media.previewSrc}
          uploadDir={() => '/gallery-item/'}
        >
          {props => <img
            src={props.src}
            alt={title}
            className="img-responsive"
          />}
        </InlineImage>
      </a>
    </div>
  )
}

export const galleryItemBlock = {
  Component: ({ index, data }) => (
    <BlocksControls index={index}>
      <GalleryItem index={index} {...data} />
    </BlocksControls>
  ),
  template: {
    label: 'Gallery item',
    defaultItem: {
      _template: 'galleryItem',
      title: 'Gallery item',
    },
    fields: [
      {
        name: 'title',
        label: 'Title',
        component: 'text',
      }
    ],
  },
}
