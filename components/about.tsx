import ReactMarkdown from 'react-markdown'
import { BlocksControls, InlineText } from 'react-tinacms-inline'
import { InlineWysiwyg } from './inline-wysiwyg'

export function About({ index, data }) {
  return (
    <BlocksControls index={index} focusRing={{ offset: 0 }} insetControls>
      <section className="success" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2>
                <InlineText name="title" />
              </h2>
              <hr className="star-primary" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-lg-offset-2">
              <InlineWysiwyg name="aboutTextLeftColumn" format="markdown">
                <ReactMarkdown>
                  {data.aboutTextLeftColumn}
                </ReactMarkdown>
              </InlineWysiwyg>
            </div>
            <div className="col-lg-4">
              <InlineWysiwyg name="aboutTextRightColumn" format="markdown">
                <ReactMarkdown>
                  {data.aboutTextRightColumn}
                </ReactMarkdown>
              </InlineWysiwyg>
            </div>
            <div className="col-lg-8 col-lg-offset-2 text-center lead">
              <InlineWysiwyg name="aboutTextBelowColumns" format="markdown">
                <ReactMarkdown>
                  {data.aboutTextBelowColumns}
                </ReactMarkdown>
              </InlineWysiwyg>
            </div>
          </div>
        </div>
      </section>
    </BlocksControls>
  )
}

export const aboutBlock = {
  Component: About,
  template: {
    label: 'About',
    defaultItem: {
      _template: 'about',
      title: 'About',
      aboutTextLeftColumn: "Left column text goes here",
      aboutTextRightColumn: "Right column text goes here",
      aboutTextBelowColumns: "Below columns text goes here",
    },
    fields: [],
  },
}
