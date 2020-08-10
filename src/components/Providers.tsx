import AuthProvider from "providers/AuthProvider";
import * as React from "react";

interface Props {
  children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default Providers;
