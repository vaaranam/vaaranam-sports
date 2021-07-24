export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Features</h2>
        </div>

        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                  {" "}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
        <ul class="list-group" style={{ paddingTop: 24 }}>
          <li class="list-group-item">
            Rental (Hour based) booking for football and box cricket
          </li>
          <li class="list-group-item">
            All types of parties and events undertaken
          </li>
          <li class="list-group-item">Football Coaching (under 16)</li>
          <li class="list-group-item">
            CrossFit and Weight Loss program (all age groups)
          </li>
          <li class="list-group-item">Ground Dimensions 40m x 20m (7's)</li>
        </ul>
      </div>
    </div>
  );
}
