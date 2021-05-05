import React, { Component } from "react";
import DisplayValue from './display/DisplayValue';

class CalculatorMain extends Component {
  render() {
    return (
      <div className="">
          <div className="text-center bg-dark text-white p-3">
          <h1>Calculator</h1>
          </div>
          <DisplayValue />
      </div>
    );
  }
}
export default CalculatorMain;
