import { BlocksControls, InlineText } from 'react-tinacms-inline'
import ContactForm from './contact-form'

export function Contact({ index }) {
  return (
    <BlocksControls index={index} focusRing={{ offset: 0 }} insetControls>
      <section id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2>
                <InlineText name="title" />
              </h2>
              <hr className="star-light" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </BlocksControls>
  )
}

export const contactBlock = {
  Component: Contact,
  template: {
    label: 'Contact',
    defaultItem: {
      _template: 'contact',
      title: 'Contact',
    },
    fields: [],
  },
}
