import React, { Component } from "react";
import NavBar from "./navbar";
import ContentList from "./ContentList";
import ScrollAnimation from "react-animate-on-scroll";
import Review from "./Review";
import Footer from "./Footer";
class MainPage extends Component {
  state = {
    contents: [
      {
        id: 1,
        img:
          "https://1giyep1rf08048332uak0q01-wpengine.netdna-ssl.com/wp-content/uploads/2020/02/stop-marketing-2015_imgc.jpg",
        head: "Heading 1 For First Item Of List",
        desc:
          "Iterable Catalog enables brands to offer individualized and hyper-relevant content recommendations based on each customer’s preferences and behavior.",
      },
      {
        id: 2,
        img:
          "https://1giyep1rf08048332uak0q01-wpengine.netdna-ssl.com/wp-content/uploads/2020/02/real-face_imgc.jpg",
        head: "Heading 2 For Second Item Of List",
        desc:
          " Our Intelligence Suite leverages the latest data science and machine learning techniques to provide send-time, channel and frequency optimization to ensure every customer receives messages when, where and how often they want them.",
      },
      {
        id: 3,
        img:
          "https://1giyep1rf08048332uak0q01-wpengine.netdna-ssl.com/wp-content/uploads/2020/02/stop-marketing-2015_imgc.jpg",
        head: "Heading 3 For Third Item of list",
        desc:
          " Our Intelligence Suite leverages the latest data science and machine learning techniques to provide send-time, channel and frequency optimization to ensure every customer receives messages when, where and how often they want them.",
      },
    ],
    reviews: [
      {
        id: 1,
        img:
          "https://1giyep1rf08048332uak0q01-wpengine.netdna-ssl.com/wp-content/uploads/2019/08/brian-schmidt_450x450.jpg",
        review:
          "Just random text review to text. Brian loosi Brian Loosi Loosi ullu ka pathha ullu ka pathha ullu ka pathha ullu ka pathha",
        name: "Brian Fury",
        desg: "Brian Designation",
      },
      {
        id: 2,
        img:
          "https://1giyep1rf08048332uak0q01-wpengine.netdna-ssl.com/wp-content/uploads/2019/08/brian-schmidt_450x450.jpg",
        review:
          "Just random text review to text. Brian loosi Brian Loosi Loosi ullu ka pathha ullu ka pathha ullu ka pathha ullu ka pathha",
        name: "Brian Loosi",
        desg: "Brian Designation",
      },
      {
        id: 2,
        img:
          "https://1giyep1rf08048332uak0q01-wpengine.netdna-ssl.com/wp-content/uploads/2019/08/brian-schmidt_450x450.jpg",
        review:
          "Just random text review to text. Brian loosi Brian Loosi Loosi ullu ka pathha ullu ka pathha ullu ka pathha ullu ka pathha",
        name: "Brian Chooha",
        desg: "Brian Designation",
      },
    ],
  };
  render() {
    return (
      <div>
        <NavBar />
        <div className="head-main">
          <div className="head-text">Main Text at the Start</div>
          <div className="head-description">
            Main text description Below the main Header Text
          </div>
          <button className="head-btn">Request Demo</button>
        </div>
        {this.state.contents.map((content) => (
          <ContentList
            key={content.id}
            img={content.img}
            head={content.head}
            desc={content.desc}
          />
        ))}
        <div className="head-main">
          <div className="head-text">Text at the Bottom</div>
          <div className="head-description">
            Main Text description Below the main Header Text
          </div>
          <button className="head-btn">Request Demo</button>
        </div>
        <div className="reviews">
          {this.state.reviews.map((review) => (
            <Review
              key={review.id}
              img={review.img}
              review={review.review}
              name={review.name}
              desg={review.desg}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default MainPage;
