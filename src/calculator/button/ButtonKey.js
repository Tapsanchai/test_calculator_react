import React, { Component } from "react";

class ButtonKey extends Component {
  state = {
    data: "0",
    data2: "0",
    operate: "",
  };

  ChangeNum = (n) => {
    if (this.state.operate === "") {
      if (this.state.data === "0") {
        this.setState({ data: n });
        this.props.SetDisplayNum1(n);
      } else {
        this.setState({ data: this.state.data + n });
        this.props.SetDisplayNum1(n);
      }
    } else {
      if (this.state.data2 === "0") {
        this.setState({ data2: n });
        this.props.SetDisplayNum2(n);
      } else {
        this.setState({ data2: this.state.data2 + n });
        this.props.SetDisplayNum2(n);
      }
    }
  };

  ChangeOperator = (o) => {
    if (this.state.data === "0" && this.state.data2 === "0") {
      console.log("please chk number");
    } else {
      if (o === "=") {
          if(this.state.data2 === "0") {
              console.log("can't choose =")
          }
          else {
            this.props.SetDisplayOperator(o);
          }
      } else if (o === "c") {
        this.props.SetDisplayOperator(o);
        this.setState({
          data: "0",
          data2: "0",
          operate: "",
        });
      } else {
        this.setState({ operate: o });
        this.props.SetDisplayOperator(o);
      }
    }
  };

  render() {
    return (
      <div className="row text-center p-3">
        <div className="col-lg-12">
          <div className="">
            <table class="table table-bordered table-responsive-sm mb-0">
              <tbody className="bg-light">
                <tr className="align-middle">
                  <td>
                    <button
                      className="btn btn-light btn-lg w-100"
                      onClick={() => this.ChangeNum("7")}
                    >
                      <h3>7</h3>
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-light btn-lg w-100"
                      onClick={() => this.ChangeNum("8")}
                    >
                      <h3>8</h3>
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-light btn-lg w-100"
                      onClick={() => this.ChangeNum("9")}
                    >
                      <h3>9</h3>
                    </button>
                  </td>
                  <td className="table-warning">
                    <button
                      className="btn btn-lg w-100"
                      onClick={() => this.ChangeOperator("/")}
                    >
                      <h3>/</h3>
                    </button>
                  </td>
                </tr>
                <tr className="align-middle">
                  <td>
                    <button
                      className="btn btn-light btn-lg w-100"
                      onClick={() => this.ChangeNum("4")}
                    >
                      <h3>4</h3>
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-light btn-lg w-100"
                      onClick={() => this.ChangeNum("5")}
                    >
                      <h3>5</h3>
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-light btn-lg w-100"
                      onClick={() => this.ChangeNum("6")}
                    >
                      <h3>6</h3>
                    </button>
                  </td>
                  <td className="table-warning">
                    <button
                      className="btn btn-lg w-100"
                      onClick={() => this.ChangeOperator("x")}
                    >
                      <h3>x</h3>
                    </button>
                  </td>
                </tr>
                <tr className="align-middle">
                  <td>
                    <button
                      className="btn btn-light btn-lg w-100"
                      onClick={() => this.ChangeNum("1")}
                    >
                      <h3>1</h3>
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-light btn-lg w-100"
                      onClick={() => this.ChangeNum("2")}
                    >
                      <h3>2</h3>
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-light btn-lg w-100"
                      onClick={() => this.ChangeNum("3")}
                    >
                      <h3>3</h3>
                    </button>
                  </td>
                  <td className="table-warning">
                    <button
                      className="btn btn-lg w-100"
                      onClick={() => this.ChangeOperator("-")}
                    >
                      <h3>-</h3>
                    </button>
                  </td>
                </tr>
                <tr className="align-middle">
                  <td>
                    <button
                      className="btn btn-light btn-lg w-100"
                      onClick={() => this.ChangeNum("0")}
                    >
                      <h3>0</h3>
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-light btn-lg w-100"
                      onClick={() => this.ChangeNum(".")}
                    >
                      <h3>.</h3>
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-light btn-lg w-100"
                      onClick={() => this.ChangeOperator("c")}
                    >
                      <h3>C</h3>
                    </button>
                  </td>
                  <td className="table-warning">
                    <button
                      className="btn btn-lg w-100"
                      onClick={() => this.ChangeOperator("+")}
                    >
                      <h3>+</h3>
                    </button>
                  </td>
                </tr>
                <tr className="align-middle">
                  <td className="table-secondary" colspan="3"></td>
                  <td className="table-info">
                    <button
                      className="btn btn-lg w-100"
                      onClick={() => this.ChangeOperator("=")}
                    >
                      <h3>=</h3>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default ButtonKey;
