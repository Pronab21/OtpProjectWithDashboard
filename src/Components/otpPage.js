import React, { Component } from "react";
import "../Pages/style.scss";
import { Form, Button } from "react-bootstrap";
import My_image from "../image/js.png";
import OtpInput from "react-otp-input";
import axios from "axios";

class OtpPage extends Component {
  state = {
    otp: "",
  };

  //Need when want to use api.

  // header = {
  //   headers: {
  //     "Content-Type": "application/json",
  //     Module: "JW9tc0ByZWRsdGQl",
  //   },
  // };

  changehandler = (otp) => this.setState({ otp });

  submithandler = async (event) => {
    event.preventDefault();
    this.props.history.push("/password");

    //Need when want to use api.

    //   try {
    //     const response = await axios.post(
    //       `http://oms.redltd.tech:9004/api/auth/userlogin/`,
    //       this.state,
    //       this.header
    //     );

    //     if (response.data.success === true) {
    //       console.log(response.data);
    //       this.props.history.push("/home");
    //     }

    //     else if (response.data.success === false) {
    //       console.log(response.data);
    //     }
    //   } catch (error) {
    //     if (error) {
    //       console.log(error.response);
    //     }
    //  }
  };

  render() {
    return (
      <div className="Home">
        <div className="container">
          <div className="row">
            <div className="col-md-4 m-auto pt">
              <div className="card border-0 bg-white shadow">
                <div className="card-header bg-white text-center p-3">
                  <img
                    src={My_image}
                    alt="Logo"
                    style={{ width: 50, height: 50 }}
                  />
                  <h3>Login</h3>
                </div>
                <div className="card-body p-3">
                  <Form onSubmit={this.submithandler}>
                    <div className="form-group bg-white text-center">
                      <label
                        className="m-auto pb-2 pt-0"
                        htmlFor="exampleInputEmail1"
                      >
                        Give Your OTP
                      </label>
                      <OtpInput
                        className="m-auto text-center"
                        value={this.state.otp}
                        onChange={this.changehandler}
                        numInputs={6}
                        separator={<span></span>}
                      />
                    </div>
                    <hr />
                    <Button type="submit" className="btn btn-primary bttn">
                      NEXT
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default OtpPage;
