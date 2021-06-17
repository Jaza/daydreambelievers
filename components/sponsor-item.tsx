import { useCMS } from 'tinacms'
import { BlocksControls, InlineImage } from 'react-tinacms-inline'

export function SponsorImage({ title }) {
  return (
    <InlineImage
      name="image"
      parse={media => media.previewSrc}
      uploadDir={() => '/sponsor-item/'}
      className="img-responsive sponsor-img"
      alt={title}
    />
  )
}

export function SponsorItem({ index, title, websiteUrl }) {
  const cms = useCMS()
  return (
    <div className="sponsor-item">
      {!cms.enabled && websiteUrl
        ? <a href={websiteUrl} title={title}><SponsorImage title={title} /></a>
        : <SponsorImage title={title} />
      }
    </div>
  )
}

export const sponsorItemBlock = {
  Component: ({ index, data }) => {
    return (
      <BlocksControls index={index}>
        <SponsorItem index={index} {...data} />
      </BlocksControls>
    )
  },
  template: {
    label: 'Sponsor',
    defaultItem: {
      _template: 'sponsorItem',
      title: 'Sponsor',
    },
    fields: [
      {
        name: 'title',
        label: 'Title',
        component: 'text',
      },
      {
        name: 'image',
        label: 'Image',
        component: 'image',
        uploadDir: () => '/sponsor-item/',
      },
      {
        name: 'websiteUrl',
        label: 'Website URL',
        component: 'text',
      },
    ],
  },
}
