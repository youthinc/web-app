import { fs } from "lib/firebase";
import upperFirst from "lodash/upperFirst";
import { getSearchMachine } from "./getSearchMachine";

export const searchIndividual = getSearchMachine({
  getRef: ({
    name,
    role,
    education,
    field,
    interests,
    activities,
    softSkills,
    hardSkills,
  }) => {
    const search = upperFirst(name.trim().toLowerCase());
    let ref = fs.collection("profile");
    if (search) {
      ref = ref
        .where("personal.lastName", ">=", search)
        .where("personal.lastName", "<=", search + "\uf8ff");
    }
    if (role) {
      ref = ref.where("interests.roles", "array-contains", role);
    }
    if (education) {
      ref = ref.where("professional.education", "==", education);
    }
    if (field) {
      ref = ref.where("professional.field", "==", field);
    }
    if (interests) {
      ref = ref.where("interests.interests", "==", interests);
    }
    if (activities) {
      ref = ref.where("interests.activities", "array-contains", activities);
    }
    if (softSkills) {
      ref = ref.where("skills.softSkills", "array-contains", softSkills);
    }
    if (hardSkills) {
      ref = ref.where("skills.hardSkills", "array-contains", hardSkills);
    }
    // return ref.orderBy("personal.lastName");
    return ref;
  },
  initialQuery: {
    name: "",
    role: "",
    education: "",
    field: "",
    interests: "",
    activities: "",
    softSkills: "",
    hardSkills: "",
  },
  isEmpty: ({
    name,
    role,
    education,
    field,
    interests,
    activities,
    softSkills,
    hardSkills,
  }) =>
    !name.trim() &&
    !role &&
    !education &&
    !field &&
    !interests &&
    !activities &&
    !softSkills &&
    !hardSkills,
});
