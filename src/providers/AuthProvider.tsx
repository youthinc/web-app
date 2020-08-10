import { User } from "firebase";
import { auth } from "lib/firebase";
import * as React from "react";
import { useAuthState } from "react-firebase-hooks/auth";

const AuthCtx = React.createContext<User | undefined>(undefined);
export const useAuthCtx = () => React.useContext(AuthCtx);

interface Props {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const [user, loading, error] = useAuthState(auth);

  if (loading || error) return null;

  return <AuthCtx.Provider value={user}>{children}</AuthCtx.Provider>;
};

export default AuthProvider;
