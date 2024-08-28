import React from "react";
import "./Form.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstNameData: "",
      lastNameData: "",
      emailData: "",

      submitted: false,

      allValid: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.firstNameHandler = this.firstNameHandler.bind(this);
    this.lastNameHandler = this.lastNameHandler.bind(this);
    this.emailHandler = this.emailHandler.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      submitted: true,
    });

    if (
      this.state.firstNameData !== "" &&
      this.state.lastNameData !== "" &&
      this.state.emailData !== ""
    ) {
      this.setState({
        allValid: true,
        submitted: false, //To Success M Is Not Shown After Submit Filled Form
        firstNameData: "",
        lastNameData: "",
        emailData: "",
      });

      setTimeout(() => {
        this.setState({
          allValid: false,
        });
      }, 3000);
    } else {
      this.setState({
        submitted: true,
        allValid: false, //To Success M Is Not Shown when Submit Form Is Empty
      });
    }
  }

  firstNameHandler(event) {
    this.setState({
      firstNameData: event.target.value,
    });
  }

  lastNameHandler(event) {
    this.setState({
      lastNameData: event.target.value,
    });
  }
  emailHandler(event) {
    this.setState({
      emailData: event.target.value,
    });
  }

  render() {
    return (
      <div className="form-container">
        <form
          className="register-form"
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          {/* Uncomment the next line to show the success message */}
          {this.state.submitted && this.state.allValid && (
            <div className="success-message">
              Success! Thank you for registering
            </div>
          )}

          <input
            id="first-name"
            className="form-field"
            type="text"
            placeholder="First Name"
            name="firstName"
            value={this.state.firstNameData}
            onChange={(event) => this.firstNameHandler(event)}
          />
          {/* Uncomment the next line to show the error message */}
          {this.state.submitted && this.state.firstNameData.length === 0 && (
            <span id="first-name-error">Please enter a first name</span>
          )}
          <input
            id="last-name"
            className="form-field"
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={this.state.lastNameData}
            onChange={(event) => this.lastNameHandler(event)}
          />
          {/* Uncomment the next line to show the error message */}
          {this.state.submitted && this.state.lastNameData.length === 0 && (
            <span id="last-name-error">Please enter a last name</span>
          )}
          <input
            id="email"
            className="form-field"
            type="text"
            placeholder="Email"
            name="email"
            value={this.state.emailData}
            onChange={(event) => this.emailHandler(event)}
          />
          {/* Uncomment the next line to show the error message */}
          {this.state.submitted && this.state.emailData.length === 0 && (
            <span id="email-error">Please enter an email address</span>
          )}
          <button className="form-field" type="submit">
            Register
          </button>
        </form>
      </div>
    );
  }
}
