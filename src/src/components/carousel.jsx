import React, { useEffect, useState } from "react";
import RCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Card, Row, Col, Layout } from "antd";
import { Modal, Button } from "antd";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const Carousel = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modelContent, setModelContent] = useState({ title: "", text: "" });

  const showModal = ({ title, text }) => {
    setIsModalVisible(true);
    setModelContent({ title, text });
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Layout>
        <div id="team" className="text-center">
          <div
            className="container service-custom"
            style={{ marginBottom: -100 }}
          >
            <div
              className="col-md-8 col-md-offset-2 section-title"
              style={{ marginBottom: 0 }}
            >
              <h2>Services</h2>
            </div>
          </div>
        </div>
        <Row>
          <Col span={24} style={{ marginBottom: 24 }}>
            <RCarousel
              arrows={false}
              swipeable={false}
              draggable={false}
              showDots={true}
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={1000}
              keyBoardControl={true}
              // customTransition="all .5"
              transitionDuration={2000}
              containerClass="carousel-container carousel-container-custom"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              {props.data
                ? props.data.map((d, i) => (
                    <Card style={{ width: "100%", padding: 32 }}>
                      <h1>{d.title}</h1>
                      <p>{d.text.substring(0, 350)}...</p>
                      <Button type="ghost" onClick={() => showModal({ ...d })}>
                        View more
                      </Button>
                    </Card>
                  ))
                : "loading"}
            </RCarousel>
          </Col>
        </Row>
      </Layout>
      <Modal
        title={modelContent.title}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>{modelContent.text}</p>
      </Modal>
    </>
  );
};
