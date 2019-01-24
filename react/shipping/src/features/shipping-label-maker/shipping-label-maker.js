import React, { Component } from "react";
import Wizard from "../../core/components/wizard";
import steps from "../../core/components/steps/index";
import shippingInfo from "./shippingInfo";

export default class ShippingLabelMaker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      labelReady: false
    };
    this.createLabel = this.createLabel.bind(this);
  }

  createLabel(val) {
    this.setState({
      labelReady: true,
      info: val
    });
  }

  /* adding header and wizard section,
    passing wizardContext as props to children of wizard
   */
  render() {
    console.log(shippingInfo);
    return (
      <div className="app-container">
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <div className="header">Shipping Label Maker Inc.</div>

          <Wizard steps={steps} wizardContext={shippingInfo} />
        </div>
      </div>
    );
  }
}
