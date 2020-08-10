import * as yup from "yup";
import { ServerValues } from "./types";

export const schema = yup.object().shape<ServerValues>({
  title: yup.string().label("Position/title").trim().required(),
  education: yup.string().label("Education").required(),
  status: yup.string().label("Status").required(),
  schoolOrg: yup.string().label("School/organization").trim().required(),
  occupation: yup.string().label("Occupation").required(),
  field: yup.string().label("Field").required(),
});
