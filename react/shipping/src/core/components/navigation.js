import React, { Component } from "react";

/* this component abstract navigation for wizard*/
export default class Navigation extends Component {
  render() {
    const hidden = {
      display: "none"
    };

    return (
      <div style={{ margin: 5 + "%", paddingLeft: 130 + "px" }}>
        <div style={this.props.show ? {} : hidden}>
          <button
            style={this.props.showPrev ? {} : hidden}
            className="btn--prev"
            onClick={this.props.prev}
          >
            Previous
          </button>

          <button
            style={this.props.showNext ? {} : hidden}
            className="btn--next"
            onClick={this.props.next}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}
