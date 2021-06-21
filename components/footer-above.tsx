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
          <div className="footer-col col-md-4">
            <h3>
              <InlineText name="footerConnectWithUsTitle" />
            </h3>
            <ul className="list-inline">
              <li>
                <a href={data.footerConnectWithUsUrl} className="btn-social btn-outline">
                  <i className="fa fa-fw fa-facebook" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
