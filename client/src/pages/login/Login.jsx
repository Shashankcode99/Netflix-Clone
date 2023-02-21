import "./login.scss";
export default function Login() {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://www.freepnglogos.com/uploads/netflix-logo-text-emblem-31.png"
            alt="netflix_logo"
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder="Email or Phone Number" className="email" />
          <input type="password" placeholder= "Password" className="password"></input>
          <button className="loginButton">Sign In</button>

          <span>New to Netflix? <b>Sign up now.</b></span>
          <small>
          This page is protected by Google reCAPTCHA to ensure you're not a <b>Learn more.</b> 
          </small>
        </form>
      </div>
    </div>
  );
}
