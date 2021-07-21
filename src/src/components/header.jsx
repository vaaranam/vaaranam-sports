import { useEffect, useState } from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

export const Header = (props) => {
  const { height, width } = useWindowDimensions();

  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <span>
                  <img
                    src={`img/logo.png`}
                    alt="Logo"
                    style={{
                      width: width * 0.3,
                      resize: "inline",
                      borderRadius: width * 0.3,
                      backgroundColor: "rgba(255,255,255,0.3)",
                    }}
                  />
                </span>
                {/* <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1> */}
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                {/* <a
                  href='#features'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Learn More
                </a>{' '} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
