import * as yup from "yup";
import { ServerValues } from "./types";

export const schema = yup.object().shape<ServerValues>({
  softSkills: yup
    .array()
    .label("Soft skill")
    .of(yup.string().required())
    .max(3)
    .required(),
  hardSkills: yup
    .array()
    .label("Hard skill")
    .of(yup.string().required())
    .max(3)
    .required(),
});
