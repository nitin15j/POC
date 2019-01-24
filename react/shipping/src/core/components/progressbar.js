import React, { Component } from "react";

/* progress bar component to show steps completion */
export default class ProgressBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      labelReady: false
    };
  }

  getStyle(num, length) {
    return {
      width: ((num - 1) / (length - 1)) * 100 + "%"
    };
  }

  render() {
    return (
      <div className="progress">
        <span style={this.getStyle(this.props.step, this.props.length)} />
      </div>
    );
  }
}
