import ReactMarkdown from 'react-markdown'
import { InlineImage, InlineText } from 'react-tinacms-inline'
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
          <div className="footer-col col-md-4">
            <h3>
              <InlineText name="musicalDirectorTitle" />
            </h3>
            <InlineImage
              name="musicalDirectorImage"
              parse={media => media.previewSrc}
              uploadDir={() => '/musical-director-image/'}
              className="musical-director-image-container"
            >
              {props => <img
                src={props.src}
                alt={data.musicalDirectorTitle}
                className="img-responsive img-circle img-lesswidth"
              />}
            </InlineImage>
            <div className="musical-director-text">
              <InlineWysiwyg name="musicalDirectorText" format="markdown">
                <ReactMarkdown>
                  {data.musicalDirectorText}
                </ReactMarkdown>
              </InlineWysiwyg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
