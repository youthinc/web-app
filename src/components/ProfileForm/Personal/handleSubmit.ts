import { fs } from "lib/firebase";
import { ServerValues } from "./types";

export const handleSubmit = async (
  values: ServerValues,
  uid: string,
  email: string
) => {
  const doc = await fs.doc(`profile/${uid}`).get();
  if (doc.exists) {
    await fs.doc(`profile/${uid}`).update({
      personal: { ...values, email },
    });
  } else {
    await fs.doc(`profile/${uid}`).set({
      personal: { ...values, email },
    });
  }
};
