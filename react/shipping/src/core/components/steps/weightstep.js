import React from "react";

export default class StepThree extends React.Component {
  render() {
    const { onAction } = this.props;
    const { weight } = this.props.wizardContext;
    return (
      <div style={{ marginLeft: 15 + "%" }}>
        <h4>Enter Weight</h4>
        <div>
          <label>Weight</label>
          <input
            className="u-full-width"
            placeholder="Weight"
            data-id="weight"
            type="text"
            onChange={onAction}
            value={weight}
            autoFocus
          />
        </div>
      </div>
    );
  }
}
