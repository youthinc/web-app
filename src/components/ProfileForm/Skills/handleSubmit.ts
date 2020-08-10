import { fs } from "lib/firebase";
import { ServerValues } from "./types";

export const handleSubmit = async (values: ServerValues, uid: string) => {
  const doc = await fs.doc(`profile/${uid}`).get();
  if (doc.exists) {
    await fs.doc(`profile/${uid}`).update({
      skills: values,
    });
  } else {
    await fs.doc(`profile/${uid}`).set({
      skills: values,
    });
  }
};
