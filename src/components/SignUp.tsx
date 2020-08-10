import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bg from "assets/login.jpg";
import logo from "assets/logo.png";
import cn from "classnames";
import { auth } from "lib/firebase";
import { useAuthCtx } from "providers/AuthProvider";
import * as React from "react";
import { Link, Redirect } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirm, setConfirm] = React.useState("");
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const user = useAuthCtx();

  if (user) {
    return <Redirect to="/" />;
  }

  const handleSubmit = () => {
    if (password.length < 6) {
      setError("Password must contain at least 6 characters.");
    } else if (password !== confirm) {
      setError("Password confirmation does not match.");
    } else {
      setLoading(true);
      auth
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          setError(err.message);
        });
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
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
          <label className="label">Confirm password:</label>

          <div className="control has-icons-left">
            <input
              className="input"
              name="_confirm"
              type="password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value.trim())}
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
                <FontAwesomeIcon icon="plus" />
              </span>

              <span>Sign up</span>
            </button>
          </div>

          {!!error && <p className="help is-danger">{error}</p>}
        </div>

        <div className="notification is-link has-text-centered is-size-5">
          Already joined us? Click <Link to="/sign-in">here</Link> to sign in.
        </div>
      </div>
    </div>
  );
};

export default SignUp;
