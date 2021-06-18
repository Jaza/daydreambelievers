export default function ContactForm() {
  return (
    <form name="contact" action="/success" method="POST" className="form" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="subject" value="[Daydream Believers Contact Form] New Message" />
      <div className="row control-group">
        <div className="form-group col-xs-12 floating-label-form-group controls">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" placeholder="Name" id="name" name="name" required />
        </div>
      </div>
      <div className="row control-group">
        <div className="form-group col-xs-12 floating-label-form-group controls">
          <label htmlFor="email">Email Address</label>
          <input type="email" className="form-control" placeholder="Email Address" id="email" name="email" />
        </div>
      </div>
      <div className="row control-group">
        <div className="form-group col-xs-12 floating-label-form-group controls">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" className="form-control" placeholder="Phone Number" id="phone" name="phone" required />
        </div>
      </div>
      <div className="row control-group">
        <div className="form-group col-xs-12 floating-label-form-group controls">
          <label htmlFor="message">Message</label>
          <textarea rows={5} className="form-control" placeholder="Message" id="message" name="message" required />
        </div>
      </div>
      <br />
      <div className="row">
        <div className="form-group col-xs-12">
          <button type="submit" className="btn btn-success btn-lg" id="btnSubmit">Send</button>
        </div>
      </div>
    </form>
  )
}
