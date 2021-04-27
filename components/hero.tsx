import { InlineForm, InlineText } from 'react-tinacms-inline'

export default function Hero({ form, title }) {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <img className="img-responsive img-circle img-lesswidth" src="http://daydreambelievers.greenash.net.au/static/cache/thumbnails/image-content-block/site-logo/FB_IMG_1469839784721-2016-07-30-00-53-04_256x256_fit_85.jpg" alt={title} />
            <div className="intro-text">
              <InlineForm form={form}>
                <span className="name">
                  <InlineText name="title" />
                </span>
              </InlineForm>
              <hr className="star-primary" />
              <span className="skills">Singing - Dancing - Music</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
