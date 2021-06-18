import { BlocksControls, InlineBlocks, InlineText } from 'react-tinacms-inline'
import { eventItemBlock } from './event-item'

export function Events({ index }) {
  return (
    <BlocksControls index={index} focusRing={{ offset: 0 }} insetControls>
      <section id="events">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center" style={{ position: "static" }}>
              <h2>
                <InlineText name="title" />
              </h2>
              <hr className="star-primary" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5 col-lg-offset-1 col-sm-6">
              <h3>Upcoming</h3>
              <p>No upcoming events.</p>
            </div>
            <div className="col-lg-5 col-sm-6">
              <h3>Past</h3>
              <InlineBlocks name="eventItems" blocks={EVENTS_BLOCKS} />
            </div>
          </div>
        </div>
      </section>
    </BlocksControls>
  )
}

export const eventsBlock = {
  Component: Events,
  template: {
    label: 'Events',
    defaultItem: {
      _template: 'events',
      title: 'Events',
      eventItems: [
        {
          _template: 'eventItem',
          title: 'Event',
        },
      ],
    },
    fields: [],
  },
}

const EVENTS_BLOCKS = {
  eventItem: eventItemBlock,
}
