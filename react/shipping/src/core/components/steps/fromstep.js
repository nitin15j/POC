import React, { Component } from "react";

export default class StepOne extends Component {
  render() {
    const { onAction } = this.props;
    const from = this.props.wizardContext.from;
    return (
      <div style={{ marginLeft: 15 + "%" }}>
        <h4>Enter the sender's Address</h4>
        <div>
          <div>
            <label>Name</label>
            <input
              className="u-full-width"
              placeholder="First Name"
              style={{ marginBottom: 10 + "px" }}
              data-id="name"
              type="text"
              data-step="from"
              onChange={onAction}
              value={from.name}
              autoFocus
            />
          </div>
        </div>
        <div>
          <div>
            <label>Street</label>
            <input
              className="u-full-width"
              placeholder="Street"
              data-id="street"
              type="text"
              data-step="from"
              onChange={onAction}
              value={from.street}
            />
          </div>
        </div>
        <div>
          <label>City</label>
          <input
            className="small"
            placeholder="City"
            data-id="city"
            type="text"
            data-step="from"
            onChange={onAction}
            value={from.city}
          />
          <label>State</label>
          <input
            className="small"
            placeholder="state"
            data-id="state"
            type="text"
            data-step="from"
            onChange={onAction}
            value={from.state}
          />
          <label>Zip</label>
          <input
            className="small"
            placeholder="zip"
            data-id="zip"
            type="text"
            data-step="from"
            onChange={onAction}
            value={from.zip}
          />
        </div>
      </div>
    );
  }
}

StepOne.defaultProps = {
  wizardContext: {},
  onAction: () => {}
};
