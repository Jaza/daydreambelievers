import React from 'react'
import { BlocksControls, InlineText } from 'react-tinacms-inline'

export function Gallery() {
  return (
    <h2>
      <InlineText name="title" />
    </h2>
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
