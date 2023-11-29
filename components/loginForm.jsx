import React from "react";
import { Input } from "./input";

const LoginForm = ({ mode }) => {

  return (
    <form action='/api/login' method='POST'>
      <div className="form-block__input-wrapper">
        <div className="form-group form-group--login">
          <Input type="text" id="username" label="Email" disabled={mode === 'signup'}  />
          <Input type="password" id="password" label="Password" disabled={mode === 'signup'}  />
        </div>
        <div className="form-group form-group--signup">
          <Input type="email" id="email" label="Email" disabled={mode === 'login'} />
          <Input type="password" id="createpassword" label="Password" disabled={mode === 'login'} />
          <Input type="password" id="repeatpassword" label="Confirm Password" disabled={mode === 'login'} />
        </div>
      </div>
      <button className="button button--primary full-width" type="submit">{mode === 'login' ? 'Log In' : 'Sign Up'}</button>
      <div>
        <span className="link-sm">Forgot password?</span>
      </div>
    </form>
  );
};

export default LoginForm;