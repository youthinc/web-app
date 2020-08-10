import { ServerValues as ValuesAvailability } from "components/ProfileForm/Availability/types";
import { ServerValues as ValuesInterests } from "components/ProfileForm/Interests/types";
import { ServerValues as ValuesPersonal } from "components/ProfileForm/Personal/types";
import { ServerValues as ValuesProfessional } from "components/ProfileForm/Professional/types";
import { ServerValues as ValuesSkills } from "components/ProfileForm/Skills/types";
import { fs } from "lib/firebase";
import * as React from "react";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { useAuthCtx } from "./AuthProvider";

const ProfileCtx = React.createContext<{
  personal?: ValuesPersonal;
  interests?: ValuesInterests;
  professional?: ValuesProfessional;
  skills?: ValuesSkills;
  availability?: ValuesAvailability;
}>({});
export const useProfileCtx = () => React.useContext(ProfileCtx);

interface Props {
  children: React.ReactNode;
}

const ProfileProvider = ({ children }: Props) => {
  const { uid } = useAuthCtx()!;
  const [profile] = useDocumentData<any>(fs.doc(`profile/${uid}`));

  return (
    <ProfileCtx.Provider value={profile || {}}>{children}</ProfileCtx.Provider>
  );
};

export default ProfileProvider;
