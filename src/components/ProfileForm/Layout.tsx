import ProfileProvider from "providers/ProfileProvider";
import * as React from "react";
import Progress from "./Progress";

interface Props {
  children: React.ReactNode;
  title: string;
}

const Layout = ({ children, title }: Props) => {
  return (
    <section className="section" style={{ minHeight: 1000 }}>
      <div className="container">
        <div className="columns">
          <div className="column is-one-third">
            <div style={{ position: "sticky", top: 40 }}>
              <ProfileProvider>
                <Progress />
              </ProfileProvider>

              <div className="notification is-info">
                Click <a href="https://www.youthinc.mn">here</a> to get back to
                home page.
              </div>
            </div>
          </div>
          <div className="column">
            <h1 className="title has-text-centered">{title}</h1>
            <hr />
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Layout;
