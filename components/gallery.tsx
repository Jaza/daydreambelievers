import React from 'react'
import { useCMS } from 'tinacms'
import { BlocksControls, InlineText, useInlineBlocks } from 'react-tinacms-inline'
import { GalleryContext, useGallery } from './gallery-context'
import { galleryItemBlock } from './gallery-item'
// TODO: get rid of this custom InlineBlocks once
// https://github.com/tinacms/tinacms/pull/1852 is merged
import { InlineBlocks } from './inline-blocks'

export function GalleryShowMoreButton({ toggleVisible }) {
  const blocks = useInlineBlocks()
  const galleryContext = useGallery()
  const cms = useCMS()

  return <>
    {blocks.count > 6 && !cms.enabled && !galleryContext.visible &&
      <div className="row">
        <div className="col-lg-12 text-center">
          <div className="form-add-plus">
            <a
              className="add-plus"
              style={{ cursor: "pointer" }}
              onClick={toggleVisible}
            >
              <div className="add-plus-caption">&nbsp;<span>Show more</span>&nbsp;</div>
              <div className="add-plus-wrapper"><span className="fa fa-plus"></span></div>
            </a>
          </div>
         </div>
      </div>
    }
  </>
}

export function Gallery({ index }) {
  const [visible, setVisible] = React.useState(false)

  const toggleVisible = () => {
    setVisible(visible => !visible)
  }

  return (
    <BlocksControls index={index} focusRing={{ offset: 0 }} insetControls>
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
            <GalleryContext.Provider
              value={{
                visible,
                toggleVisible,
              }}
            >
              <InlineBlocks name="galleryItems" blocks={GALLERY_BLOCKS}>
                <GalleryShowMoreButton toggleVisible={toggleVisible} />
              </InlineBlocks>
            </GalleryContext.Provider>
          </div>
        </div>
      </section>
    </BlocksControls>
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
