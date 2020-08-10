import CountrySelect from "components/form/CountrySelect";
import Input from "components/form/Input";
import ReactSelect from "components/form/ReactSelect";
import Textarea from "components/form/Textarea";
import { ageRange, gender } from "constants/individual";
import { Form, Formik } from "formik";
import { fs } from "lib/firebase";
import { useAuthCtx } from "providers/AuthProvider";
import * as React from "react";
import { useDocumentDataOnce } from "react-firebase-hooks/firestore";
import { useHistory } from "react-router-dom";
import Buttons from "../Buttons";
import Layout from "../Layout";
import { handleSubmit } from "./handleSubmit";
import { initialValues } from "./initialValues";
import { schema } from "./schema";
import { FormValues } from "./types";

const Personal = () => {
  const user = useAuthCtx()!;
  const history = useHistory();
  const [data, loading, error] = useDocumentDataOnce<FormValues>(
    fs.doc(`personal/${user.uid}`)
  );

  if (loading || error) return null;

  return (
    <Layout title="Personal info">
      <Formik
        initialValues={data || initialValues}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit(values, user.uid, user.email || "user@youthinc.mn").then(
            () => {
              setSubmitting(false);
              history.push("/profile-interests");
            }
          );
        }}
        validationSchema={schema}
      >
        <Form>
          <Input label="First name" name="firstName" />

          <Input label="Last name" name="lastName" />

          <Input label="Phone" name="phone" />

          <Input label="Social ID" name="social" />

          <CountrySelect name="country" />

          <ReactSelect name="gender" label="Gender" options={gender} />

          <ReactSelect name="ageRange" label="Age range" options={ageRange} />

          <Input label="National ID (if Mongolian)" name="nationalId" />

          <Textarea label="Full bio" name="bio" />

          <Buttons
            onSkip={() => history.push("/profile-interests")}
            next="Interests"
          />
        </Form>
      </Formik>
    </Layout>
  );
};

export default Personal;
