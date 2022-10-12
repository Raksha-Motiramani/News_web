//import { getByTitle } from '@testing-library/react'
import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageurl, newsurl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <span
            class="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
            style={{ left: "90%", zIndex: "1" }}
          >
            {source}
          </span>
          <img
            src={
              !imageurl
                ? "https://blogger.googleusercontent.com/img/a/AVvXsEiw51YCkJq7M5Pam8Jv4qT9MycaaeYJh5A9p3nh_CWGMuNf4vs6_Jc6TWk4IPMfFtSpRm4wndKEkQIKx7XF9MqySwMHgpIXy2CCu-xy8Q_yTARP9pZn-mCduAfP7XE0xg8bxuG805PXDSQVm14z5Fv31cAz1HVvN2CTa_QI2-TWim5qqIIACzC6adYq=s16000"
                : imageurl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsurl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
