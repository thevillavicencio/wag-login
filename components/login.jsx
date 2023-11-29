import React, { useState } from "react";
import LoginForm from "./loginForm";
import TopNav from './topnav'
const Login = () => {
  const [mode, setMode] = useState('login');

  return (
    <>
      <TopNav />
      <div>
        <div className={`form-block-wrapper form-block-wrapper--is-${mode}`} ></div>
        <section className={`form-block form-block--is-${mode}`}>
          <header className="form-block__header">
            <h1>{mode === 'login' ? 'Sign in!' : 'Sign up'}</h1>
            <div className="form-block__toggle-block">
              <span>{mode === 'login' ? 'Don\'t' : 'Already'} have an account? Click here &#8594;</span>
              <input id="form-toggler" type="checkbox" onClick={() => mode === 'login' ? setMode('signup') : setMode('login')} />
              <label htmlFor="form-toggler"></label>
            </div>
          </header>
          <LoginForm mode={mode} />
        </section>
      </div>
  </>
  );
};

export default Login;