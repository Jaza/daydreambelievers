import { BlocksControls, InlineBlocks, InlineText } from 'react-tinacms-inline'
import { sponsorItemBlock } from './sponsor-item'

export function Sponsors({ index }) {
  return (
    <BlocksControls index={index} focusRing={{ offset: 0 }} insetControls>
      <section id="sponsors">
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
            <div className="col-lg-12 text-center">
              <InlineBlocks name="sponsorItems" blocks={SPONSORS_BLOCKS} />
            </div>
          </div>
        </div>
      </section>
    </BlocksControls>
  )
}

export const sponsorsBlock = {
  Component: Sponsors,
  template: {
    label: 'Sponsors',
    defaultItem: {
      _template: 'sponsors',
      title: 'Sponsors',
      galleryItems: [
        {
          _template: 'sponsorItem',
          title: 'Sponsor',
        },
      ],
    },
    fields: [],
  },
}

const SPONSORS_BLOCKS = {
  sponsorItem: sponsorItemBlock,
}
