import React from 'react'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useCMS } from 'tinacms'
import { BlocksControls, InlineImage } from 'react-tinacms-inline'

export function GalleryItem({ index, title }) {
  const cms = useCMS()
  const [editorRegistered, setEditorRegistered] = useState(false)

  useEffect(() => {
    let isSubscribed = true

    if (!editorRegistered && cms.enabled) {
      import("react-tinacms-editor").then(({ MarkdownFieldPlugin }) => {
        if (isSubscribed) {
          cms.plugins.add(MarkdownFieldPlugin)
          setEditorRegistered(true)
        }
      })
    }

    return () => {
      isSubscribed = false
    }
  }, [cms.enabled])

  const isProd = process.env.NODE_ENV === 'production'
  const urlProtocol = isProd ? 'https' : 'http'

  return (
    <a href={`#galleryModal${index + 1}`} className="portfolio-link" data-toggle="modal">
      <div className="caption">
        <div className="caption-content">
          <i className="fa fa-search-plus fa-3x" />
        </div>
      </div>
      <InlineImage
        name="image"
        parse={media => media.previewSrc}
        uploadDir={() => '/gallery-item/'}
      >
        {props => <Image
          src={`${urlProtocol}:${props.src}`}
          alt={title}
          width={400}
          height={300}
          objectFit="cover"
          className="img-responsive"
        />}
      </InlineImage>
    </a>
  )
}

export const galleryItemBlock = {
  Component: ({ index, data }) => (
    <div className="col-sm-4 portfolio-item">
      <BlocksControls index={index}>
        <GalleryItem index={index} {...data} />
      </BlocksControls>
    </div>
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
      },
      {
        name: 'content',
        label: 'Content',
        component: 'markdown',
      },
      {
        name: 'eventName',
        label: 'Event name',
        component: 'text',
      },
      {
        name: 'dateTaken',
        label: 'Date taken',
        component: 'text',
      },
    ],
  },
}
