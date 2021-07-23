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
          <div className="container justify-content-center">
            <div className="row " style={{ padding: 24 }}>
              <div
                className="col-md-6 col-xs-12"
                style={{ textAlign: "center" }}
              >
                <img
                  src={`img/logo.png`}
                  alt="Logo"
                  style={{
                    width: width < 576 ? width * 0.5 : width * 0.3,
                    resize: "inline",
                    borderRadius: width < 576 ? width * 0.5 : width * 0.3,
                    backgroundColor: "rgba(255,255,255,0.3)",
                  }}
                />
              </div>
              <div
                className="col-md-6  col-xs-12"
                style={{ textAlign: "center" }}
              >
                <div style={{ height: 60 }}></div>
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: 62,
                    marginBottom: 12,
                    lineHeight: "62px",
                  }}
                >
                  {props.data ? props.data.title : "Loading"}
                </p>
                <div style={{ fontSize: 20, color: "white" }}>
                  {props.data ? props.data.paragraph : "Loading"}
                </div>
              </div>
            </div>
            <div className="row " style={{}}>
              <div
                className="col-md-12  col-xs-12"
                style={{ textAlign: "right" }}
              >
                <p style={{ fontSize: 18, marginTop: 36, marginBottom: 12 }}>
                  in association with Unique Sports Academy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
