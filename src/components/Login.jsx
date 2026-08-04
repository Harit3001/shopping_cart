export default function Login({
  email,
  password,
  errors,
  onEmailChange,
  onPasswordChange,
  onSubmit,
}) {
  return (
    <div className="login-page">
      <span className="bubble b1"></span>
      <span className="bubble b2"></span>
      <span className="bubble b3"></span>
      <span className="bubble b4"></span>
      <span className="bubble b5"></span>

      <form className="login-box" onSubmit={onSubmit} noValidate>
        <h1>Login</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={onEmailChange}
        />

        <p className="error">{errors.email}</p>

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={onPasswordChange}
        />

        <p className="error">{errors.password}</p>

        <div className="remember">
          <label>
            <input type="checkbox" />
            Remember me
          </label>

          <a href="#">Forgot Password?</a>
        </div>

        <button>Login</button>

        <p className="signup">
          Don't have an account? <a href="#">Sign Up</a>
        </p>
      </form>
    </div>
  );
}
