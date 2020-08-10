import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "assets/logo.png";
import cn from "classnames";
import { auth } from "lib/firebase";
import { useAuthCtx } from "providers/AuthProvider";
import React, { useState } from "react";

const Nav = () => {
  const [active, setActive] = useState(false);
  const user = useAuthCtx();
  if (!user) return null;

  const renderIcon = (icon, to) => {
    return (
      <span
        className="ml-2"
        style={{ cursor: "pointer" }}
        onClick={() => {
          window.location.href = to;
        }}
      >
        <FontAwesomeIcon icon={{ iconName: icon, prefix: "fab" }} />
      </span>
    );
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "#0b4c8c",
          color: "white",
        }}
      >
        <div className="container py-2">
          <i className="mr-4">Young Mongolian Professionals Association</i>
          {renderIcon(
            "facebook-square",
            "https://www.facebook.com/youthinc.mn/"
          )}
          {renderIcon("instagram", "https://www.instagram.com/youthinc.mn/")}
          {renderIcon(
            "linkedin",
            "https://www.linkedin.com/company/youthinc-mn/"
          )}
          {renderIcon("twitter", "https://twitter.com/Youthinc_mn")}
          {renderIcon(
            "youtube",
            "https://www.youtube.com/channel/UClVPFiS5kimVhjkkkA5SEhQ"
          )}
          <i>
            <a className="has-text-white ml-4" href="mailto:info@youthinc.mn">
              info@youthinc.mn
            </a>
          </i>
        </div>
      </div>
      <nav className="navbar" style={{ height: 64 }}>
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://www.youthinc.mn">
              <img src={logo} alt="logo" style={{ maxHeight: "3.75rem" }} />
            </a>

            <a
              role="button"
              className={cn("navbar-burger", active && "is-active")}
              href="/"
              onClick={(e) => {
                e.preventDefault();
                setActive((val) => !val);
              }}
            >
              <span />
              <span />
              <span />
            </a>
          </div>

          <div className={cn("navbar-menu", active && "is-active")}>
            <div className="navbar-start">
              <a
                href="https://www.youthinc.mn/index.php?con=about"
                className="navbar-item"
              >
                ABOUT US
              </a>
              <a
                href="https://www.youthinc.mn/index.php#3Menu"
                className="navbar-item"
              >
                WHAT WE DO
              </a>
              <a
                href="https://www.youthinc.mn/index.php?con=news&s=0"
                className="navbar-item"
              >
                WHAT'S NEW
              </a>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                {user.displayName || user.email}
              </div>

              <div className="navbar-item">
                <button
                  className="button is-danger is-light is-small"
                  onClick={() => auth.signOut()}
                >
                  <span className="icon">
                    <FontAwesomeIcon icon="sign-out-alt" />
                  </span>
                  <span>Sign out</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
