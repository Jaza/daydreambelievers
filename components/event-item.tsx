import Moment from 'react-moment'
import 'moment-timezone';
import { BlocksControls, InlineText } from 'react-tinacms-inline'

export function EventItem({ index, startDatetime, endDatetime }) {
  return <>
    <div className="date-label-wrapper col-sm-2">
      {startDatetime &&
        <p className="date-label">
          <span className="date-number">
            <Moment format="DD" tz="UTC">{startDatetime}</Moment>
          </span>
          <span className="month">
            <Moment format="MMM" tz="UTC">{startDatetime}</Moment>
          </span>
          <span className="year-number">
            <Moment format="YYYY" tz="UTC">{startDatetime}</Moment>
          </span>
        </p>
      }
    </div>
    <div className="details col-sm-10">
      <h4>
        <InlineText name="title" />
      </h4>
      <div className="meta">
        {startDatetime &&
          <p className="time" style={{ marginBottom: "0" }}>
            <i className="fa fa-clock-o fa-fw" />
            <Moment format="h:mma" tz="UTC">{startDatetime}</Moment>
            {endDatetime &&
              <>
                &nbsp;-&nbsp;
                <Moment format="h:mma" tz="UTC">{endDatetime}</Moment>
              </>
            }
          </p>
        }
        <div className="location" style={{ fontSize: "20px" }}>
          <i className="fa fa-map-marker fa-fw" />
          <InlineText name="locationName" />
        </div>
      </div>
    </div>
    <div style={{ clear: "both" }} />
  </>
}

export const eventItemBlock = {
  Component: ({ index, data }) => {
    return (
      <article className="events-item row">
        <BlocksControls index={index}>
          <EventItem index={index} {...data} />
        </BlocksControls>
      </article>
    )
  },
  template: {
    label: 'Event',
    defaultItem: {
      _template: 'eventItem',
      title: 'Event',
    },
    fields: [
      {
        name: 'title',
        label: 'Title',
        component: 'text',
      },
      {
        name: 'startDatetime',
        label: 'Start date/time',
        component: 'date',
        dateFormat: true,
        timeFormat: true,
      },
      {
        name: 'endDatetime',
        label: 'End date/time',
        component: 'date',
        dateFormat: true,
        timeFormat: true,
      },
      {
        name: 'locationName',
        label: 'Location name',
        component: 'text',
      },
    ],
  },
}
