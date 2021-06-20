import ReactMarkdown from 'react-markdown'
import { InlineText } from 'react-tinacms-inline'
import { InlineWysiwyg } from './inline-wysiwyg'

export default function FooterAbove({ data }) {
  return (
    <div className="footer-above">
      <div className="container">
        <div className="row">
          <div className="footer-col col-md-4">
            <h3>
              <InlineText name="footerKeyContactsTitle" />
            </h3>
            <div style={{ position: "relative" }}>
              <InlineWysiwyg name="footerKeyContactsText" format="markdown">
                <ReactMarkdown>
                  {data.footerKeyContactsText}
                </ReactMarkdown>
              </InlineWysiwyg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
