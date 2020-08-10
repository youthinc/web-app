import { fs } from "lib/firebase";
import { ServerValues } from "./types";

export const handleSubmit = async (values: ServerValues, id: string) => {
  await fs.doc(`organization/${id}`).set(values);
};
