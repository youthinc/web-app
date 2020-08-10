import { useAuthCtx } from "providers/AuthProvider";
import * as React from "react";
import { Redirect } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

const WithAuth = ({ children }: Props) => {
  const user = useAuthCtx();

  if (!user) return <Redirect to="/sign-in" />;

  return children as any;
};

export default WithAuth;
