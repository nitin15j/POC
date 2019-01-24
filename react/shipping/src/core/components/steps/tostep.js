import React, { Component } from "react";

export default class StepTwo extends Component {
  render() {
    const { onAction } = this.props;
    const to = this.props.wizardContext.to;
    return (
      <div style={{ marginLeft: 15 + "%" }}>
        <h4>Enter the reciver's Address</h4>
        <div>
          <div>
            <label>Name</label>
            <input
              className="u-full-width"
              placeholder="First Name"
              data-id="name"
              type="text"
              data-step="to"
              onChange={onAction}
              value={to.name}
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
              data-step="to"
              onChange={onAction}
              value={to.street}
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
            data-step="to"
            onChange={onAction}
            value={to.city}
          />
          <label>State</label>
          <input
            className="small"
            placeholder="state"
            data-id="state"
            type="text"
            data-step="to"
            onChange={onAction}
            value={to.state}
          />
          <label>Zip</label>
          <input
            className="small"
            placeholder="zip"
            data-id="zip"
            type="text"
            data-step="to"
            onChange={onAction}
            value={to.zip}
          />
        </div>
      </div>
    );
  }
}

StepTwo.defaultProps = {
  wizardContext: {},
  onAction: () => {}
};
