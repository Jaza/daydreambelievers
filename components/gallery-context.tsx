import * as React from 'react'

export interface GalleryDisplay {
  visible: boolean
  toggleVisible: () => void
}

export const GalleryContext = React.createContext<GalleryDisplay | null>(
  null
)

export function useGallery() {
  const galleryContext = React.useContext(GalleryContext)

  if (!galleryContext) {
    throw new Error('useGallery must be within a GalleryContext')
  }

  return galleryContext
}
