export default function GalleryModals({ blocks }) {
  const galleryItems = blocks
    .filter(block => block && block.galleryItems)
    .map(block => block.galleryItems)
    .flat(1)
  return <>
    {galleryItems.map((galleryItem, index) =>
      <div className="portfolio-modal modal fade" id={`galleryModal${index+1}`} tabIndex="-1" role="dialog" aria-hidden="true" key={`${index+1}`}>
        <div className="modal-content">
          <div className="close-modal" data-dismiss="modal">
            <div className="lr">
              <div className="rl">
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2">
                <div className="modal-body">
                  <h2>{galleryItem.title}</h2>
                  <hr className="star-light" />
                  <img className="img-responsive img-centered" src={galleryItem.photoImage} alt={galleryItem.title} />
                  <div style={{ position: "relative" }}>
                    {galleryItem.content}
                  </div>
                  <ul className="list-inline item-details">
                    <li>
                      Event:
                      <strong>
                        {galleryItem.eventName}
                      </strong>
                    </li>
                    <li>
                      Date:
                      <strong>
                        {galleryItem.dateTaken}
                      </strong>
                    </li>
                  </ul>
                  <button type="button" className="btn btn-default" data-dismiss="modal">
                    <i className="fa fa-times" />
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  </>
}
