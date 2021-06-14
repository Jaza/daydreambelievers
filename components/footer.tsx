import { InlineText } from 'react-tinacms-inline'
import EditLink from './edit-link'

export default function Footer() {
  return (
    <div className="footer-below">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <InlineText name="footerCopyrightText" />
            &nbsp;&nbsp;|&nbsp;&nbsp;
            [ <EditLink /> ]
          </div>
        </div>
      </div>
    </div>
  )
}
