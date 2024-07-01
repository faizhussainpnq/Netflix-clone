import React, { useState } from 'react';
import './Login.css';
import loginbg from '../../assets/loginbg.jpg';
import Netflix1 from '../../assets/Netflix1.png';
import { login, signup } from '../../Firebase';
import Loader from '../../assets/Loader.gif';


const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const userAuth = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    try {
      if (signState === "Sign In") {
        await login(email, password);
      } else {
        await signup(name, email, password);
      }
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  const toggleSignState = () => {
    setSignState(signState === "Sign In" ? "Sign Up" : "Sign In");
  };

  return (
    loading ? (
      //  <div className="spinner">
      //   <img src={Loader} alt="Loading..." />
      // </div>
      <div className="spinner-wrapper">
      <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
</div>
</div>
    ) : (
      <div className="login">
        <img src={Netflix1} alt="Netflix logo" className='logo'/>
        <div className="login-form">
          <h1>{signState}</h1>
          {error && <p className="error">{error}</p>}
          <form onSubmit={userAuth}>
            {signState === "Sign Up" && (
              <input
                type="text"
                placeholder='Your name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            )}
            <input
              type="email"
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" disabled={loading}>
              {signState}
            </button>
            <div className="form-help">
              <div className="remember">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember Me</label>
              </div>
              <p>Need Help?</p>
            </div>
          </form>
          <div className="form-switch">
            {signState === "Sign In" ? (
              <p>New to Netflix? <span onClick={toggleSignState}>Sign Up Now</span></p>
            ) : (
              <p>Already have an account? <span onClick={toggleSignState}>Sign In Now</span></p>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default Login;

