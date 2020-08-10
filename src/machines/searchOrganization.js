import { fs } from "lib/firebase";
import upperFirst from "lodash/upperFirst";
import { getSearchMachine } from "./getSearchMachine";

export const searchOrganization = getSearchMachine({
  getRef: ({ name, type }) => {
    const search = upperFirst(name.trim().toLowerCase());
    let ref = fs.collection("organization");
    if (search) {
      ref = ref
        .where("name", ">=", search)
        .where("name", "<=", search + "\uf8ff");
    }
    if (type) {
      ref = ref.where("type", "==", type);
    }
    return ref.orderBy("name");
  },
  initialQuery: {
    name: "",
    type: "",
  },
  isEmpty: ({ name, type }) => !name.trim() && !type,
});
