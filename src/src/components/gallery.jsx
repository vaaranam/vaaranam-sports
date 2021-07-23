export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <p></p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {[11, 12, 13, 14, 15, 16, 17].map((i) => {
              return (
                <div
                  className="col-sm-6 col-md-4 col-lg-4"
                  style={{
                    justifyContent: "center",
                    alignContent: "center",
                    alignSelf: "center",
                  }}
                >
                  <div className="portfolio-item">
                    <div className="hover-bg">
                      {" "}
                      <a
                        href={`img/portfolio/${i}.jpg`}
                        title="Project Title"
                        data-lightbox-gallery="gallery1"
                      >
                        {/* <div className='hover-text'>
                      <h4>Lorem Ipsum</h4>
                    </div> */}
                        <img
                          src={`img/portfolio/${i}.jpg`}
                          className="img-responsive gallery"
                          style={{
                            height: 240,
                            width: 240,
                            padding: 12,
                            backgroundSize: "contain",
                          }}
                          alt="Project Title"
                        />{" "}
                      </a>{" "}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
