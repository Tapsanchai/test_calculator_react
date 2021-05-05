import React, { Component } from "react";
import ButtonKey from "../button/ButtonKey";

class DisplayValue extends Component {
  state = {
    d_value1: "",
    d_value2: "",
    d_operate: "",
    d_result: "",
  };

  SetDisplayNum1 = (va) => {
    if (this.state.d_result === "") {
      if (this.state.d_value1 !== "") {
        this.setState({ d_value1: this.state.d_value1 + va });
      } else {
        this.setState({ d_value1: va });
      }
    } else {
      console.log("can't choose | plasae choose (C)");
    }
  };

  SetDisplayNum2 = (va) => {
    if (this.state.d_result === "") {
      if (this.state.d_value2 !== "") {
        this.setState({ d_value2: this.state.d_value2 + va });
      } else {
        this.setState({ d_value2: va });
      }
    } else {
      console.log("can't choose | plasae choose (C)");
    }
  };

  SetDisplayOperator = (op) => {
    if (op === "=") {
      let n1 = Number(this.state.d_value1);
      let n2 = Number(this.state.d_value2);
      let result;
      if (this.state.d_operate === "+") {
        result = String(n1 + n2);
        this.setState({ d_result: result });
      } else if (this.state.d_operate === "-") {
        result = String(n1 - n2);
        this.setState({ d_result: result });
      } else if (this.state.d_operate === "x") {
        result = String(n1 * n2);
        this.setState({ d_result: result });
      } else if (this.state.d_operate === "/") {
        result = String(n1 / n2);
        this.setState({ d_result: result });
      }
    } else if (op === "c") {
      this.setState({
        d_value1: "",
        d_value2: "",
        d_operate: "",
        d_result: "",
      });
    } else {
      this.setState({ d_operate: op });
    }
  };

  render() {
    const { d_value1, d_operate, d_value2, d_result } = this.state;
    //let show = d_operate === "" ? d_value1 : d_value1 + d_operate + d_value2;
    let show,
      show_result = d_result;

    if (d_operate === "") {
      show = d_value1;
    } else if (d_operate !== "") {
      show = d_value1 + d_operate + d_value2;
    } 
    
    if (d_value1 === "") {
      show = "0";
    }

    if (show_result === "") {
      show_result = d_result;
    } else {
      show_result = " = " + d_result;
    }
    return (
      <div>
        <div className="container">
          <div className="shadow-sm bg-white">
            <div className="row mt-5 p-3">
              <div className="col-lg-12">
                <div className="bg-light border ">
                  <div className="p-2 text-right">
                    <h2>
                      {show} <b>{show_result}</b>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <ButtonKey
              SetDisplayNum1={this.SetDisplayNum1}
              SetDisplayNum2={this.SetDisplayNum2}
              SetDisplayOperator={this.SetDisplayOperator}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default DisplayValue;
