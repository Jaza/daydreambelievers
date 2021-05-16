import { InlineForm, InlineImage, InlineText } from 'react-tinacms-inline'

export default function Hero({ form, title }) {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <InlineForm form={form}>
              <InlineImage
                name="heroImage"
                parse={media => `/${media.directory}/${media.filename}`}
                uploadDir={() => '/hero-image/'}
              >
                {props => <img src={props.src} alt={title} className="img-responsive img-circle img-lesswidth" />}
              </InlineImage>
              <div className="intro-text">
                <span className="name">
                  <InlineText name="title" />
                </span>
                <hr className="star-primary" />
                <span className="skills">Singing - Dancing - Music</span>
              </div>
            </InlineForm>
          </div>
        </div>
      </div>
    </header>
  )
}
