import React, { Component } from "react";
import Stepper from "./Stepper";
import styles from "./styles";
export const StepperContext = React.createContext();

class StepperProvider extends Component {
  state = {
    stage: 1
  };
  render() {
    return (
      <StepperContext.Provider
        value={{
          stage: this.state.stage,
          handleClick: () =>
            this.setState({
              stage: this.state.stage + 1
            })
        }}
      >
        {this.props.children}
      </StepperContext.Provider>
    );
  }
}

class App extends Component {
  render() {
    return (
      <StepperProvider>
        <Stepper stage={1}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <Stepper.Header title="Stepper Heading" />
            <Stepper.Steps>
              <Stepper.Step num={1} text={"Stage 1"} />
              <Stepper.Step num={2} text={"Stage 2"} />
              <Stepper.Step num={3} text={"Stage 3"} />
              <Stepper.Step num={3} text={"Stage 3"} />
            </Stepper.Steps>
            <Stepper.Footer title="Stepper Footer" />
          </div>
        </Stepper>
      </StepperProvider>
    );
  }
}
export default App;
