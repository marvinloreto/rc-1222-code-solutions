import React from 'react';

export class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  errorMessage() {
    const { password } = this.state;
    if (password === '') {
      return 'A password is required.';
    } else if (password.length < 8) {
      return 'Your password is too short.';
    }
  }

  render() {
    const errorMessage = this.errorMessage();
    const icon = this.state.password === '' || this.state.password.length < 8 ? 'fa-x' : 'fa-check';
    return (
      <form>
        <div>
          <label htmlFor="password">Password</label>
        </div>
        <div className="container-password">
          <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
          <i className={`fa-solid ${icon}`}></i>
        </div>
        <div>
          <p className='error-message'>
            {errorMessage}
          </p>
        </div>
      </form>
    );
  }
}
