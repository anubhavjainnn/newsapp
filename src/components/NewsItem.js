import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className=" my-3">
        <div className="card" style={{ width: "250px", resize: "contain" }}>
          <img
            src={imageUrl}
            className="card-img-top"
            alt="..."
            resize="contain"
          />
          <div className="card-body">
            <h5 className="card-title"> {title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target="__blank" className="btn btn-primary">
              See More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
