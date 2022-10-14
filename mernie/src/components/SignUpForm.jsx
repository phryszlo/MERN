import { Component } from 'react';
import LogBox from './LogBox';
import { signUp } from '../utilities/users-service'

export default class SignUpForm extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     name: '',
  //     email: '',
  //     password: '',
  //     confirm: '',
  //     error: '',
  //   };
  //   this.logger = props.logFn
  // }

  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: '',
  };

  logMsg = (msg, append = false) => {
    this.props.logFn(msg, append)
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  handleSubmit = async (evt) => {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      //  const formData = {...this.state}; //and then two deletes
      // ❓ Can you think of another way to create the formData object that excludes the confirm and error properties?
      //  Answer: no, but someone did (https://dev.to/elukuro/how-to-clone-object-except-for-one-or-some-keys-623)
      //  ("Put rest to the last" technique)
      let { error, confirm, ...formData } = this.state //javascript is weird.

      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await signUp(formData);
      // Baby step!
      console.log(user)

      // logging experiments
      // this.setState({ error: 'there was no error' });
      // this.logMsg(JSON.stringify(formData), true)
    } catch {
      // An error occurred
      this.setState({ error: 'Sign Up Failed - Try Again' });
    }
  };

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
            <label>Email</label>
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
            <label>Password</label>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
            <label>Confirm</label>
            <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
            <button type="submit" disabled={disable}>SIGN UP</button>
          </form>
        </div>
        {/* <LogBox msg={this.state.error} /> */}
        {/* {this.state.error ? this.logMsg(this.state.error, true) : null} */}
        <button onClick={() => this.logMsg('something')}>log</button>
        {/* <LogBox msg={this.state.error} /> */}
        <p className="error-message" onChange={() => this.logMsg(this.state.error)} >{this.state.error}</p>
      </div>
    );
  }
}