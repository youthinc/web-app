import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cn from "classnames";
import Events from "components/Events";
import Individuals from "components/Individuals";
import Nav from "components/Nav";
import Organizations from "components/Organizations";
import Packages from "components/Packages";
import Progress from "components/ProfileForm/Progress";
import ProfileProvider from "providers/ProfileProvider";
import * as React from "react";
import BasicInfo from "./BasicInfo";
import ProfilePicture from "./ProfilePicture";

const Home = () => {
  const [page, setPage] = React.useState(0);
  const [visible, setVisible] = React.useState(false);

  return (
    <ProfileProvider>
      <Nav />
      <div className="container py-6" style={{ minHeight: 1000 }}>
        <div className="columns">
          <div className="column is-one-quarter">
            <ProfilePicture />

            <BasicInfo />

            <p>Review your profile:</p>
            <Progress />
          </div>

          <div className="column">
            <Packages onDone={() => setVisible(true)} />

            {visible && (
              <div className="tabs is-boxed is-centered">
                <ul>
                  <li className={cn(page === 0 && "is-active")}>
                    <a
                      href="/"
                      onClick={(e) => {
                        e.preventDefault();
                        setPage(0);
                      }}
                    >
                      <span className="icon">
                        <FontAwesomeIcon icon="users" />
                      </span>
                      <span>Individuals</span>
                    </a>
                  </li>
                  <li className={cn(page === 1 && "is-active")}>
                    <a
                      href="/"
                      onClick={(e) => {
                        e.preventDefault();
                        setPage(1);
                      }}
                    >
                      <span className="icon">
                        <FontAwesomeIcon icon="building" />
                      </span>
                      <span>Organizations</span>
                    </a>
                  </li>
                </ul>
              </div>
            )}

            {page === 0 && visible && <Individuals />}
            {page === 1 && visible && <Organizations />}
          </div>
        </div>
        {visible && <Events />}
      </div>
    </ProfileProvider>
  );
};

export default Home;
