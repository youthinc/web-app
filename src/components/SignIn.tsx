import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bg from "assets/login.jpg";
import logo from "assets/logo.png";
import cn from "classnames";
import { auth } from "lib/firebase";
import { useAuthCtx } from "providers/AuthProvider";
import * as React from "react";
import { Link, Redirect } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const user = useAuthCtx();

  if (user) {
    return <Redirect to="/" />;
  }

  const handleSubmit = () => {
    setLoading(true);
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="box"
        style={{ width: 320, backgroundColor: "rgba(255,255,255,0.9)" }}
      >
        <img alt="logo" src={logo} />

        <div className="field">
          <label className="label">Email:</label>

          <div className="control has-icons-left">
            <input
              className="input"
              name="_email"
              value={email}
              onChange={(e) => setEmail(e.target.value.trim())}
            />

            <span className="icon is-left">
              <FontAwesomeIcon icon="envelope" />
            </span>
          </div>
        </div>

        <div className="field">
          <label className="label">Password:</label>

          <div className="control has-icons-left">
            <input
              className="input"
              name="_password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value.trim())}
            />

            <span className="icon is-left">
              <FontAwesomeIcon icon="lock" />
            </span>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <button
              className={cn(
                "button is-success is-fullwidth",
                loading && "is-loading"
              )}
              onClick={handleSubmit}
            >
              <span className="icon">
                <FontAwesomeIcon icon="sign-in-alt" />
              </span>

              <span>Sign in</span>
            </button>
          </div>

          {!!error && <p className="help is-danger">{error}</p>}
        </div>

        <div className="notification is-link has-text-centered is-size-5">
          New to YOUTH Inc? Click <Link to="/sign-up">here</Link> to sign up.
        </div>
      </div>
    </div>
  );
};

export default SignIn;
