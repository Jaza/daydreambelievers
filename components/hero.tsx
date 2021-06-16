import { InlineImage, InlineText, InlineTextarea } from 'react-tinacms-inline'

export default function Hero({ title }) {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <InlineImage
              name="heroImage"
              parse={media => media.previewSrc}
              uploadDir={() => '/hero-image/'}
            >
              {props => <img
                src={props.src}
                alt={title}
                className="img-responsive img-circle img-lesswidth"
              />}
            </InlineImage>
            <div className="intro-text">
              <span className="name">
                <InlineTextarea name="title" />
              </span>
              <hr className="star-primary" />
              <div className="skills">
                <InlineText name="byline" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
