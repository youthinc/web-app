import * as yup from "yup";
import { ServerValues } from "./types";

export const schema = yup.object().shape<ServerValues>({
  interests: yup.string().label("Interest").required(),
  interest: yup.string().trim(),
  roles: yup
    .array()
    .label("Roles")
    .of(yup.string().required())
    .max(3)
    .required(),
  role: yup.string().trim(),
  activities: yup
    .array()
    .label("Activities")
    .of(yup.string().required())
    .max(3)
    .required(),
  activity: yup.string().trim(),
});
