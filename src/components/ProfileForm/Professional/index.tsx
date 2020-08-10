import Input from "components/form/Input";
import ReactSelect from "components/form/ReactSelect";
import { education, field, occupation, status } from "constants/individual";
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

const Professional = () => {
  const user = useAuthCtx()!;
  const history = useHistory();
  const [data, loading, error] = useDocumentDataOnce<FormValues>(
    fs.doc(`professional/${user.uid}`)
  );

  if (loading || error) return null;

  return (
    <Layout title="Professional info">
      <Formik
        initialValues={data || initialValues}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit(values, user.uid).then(() => {
            setSubmitting(false);
            history.push("/profile-skills");
          });
        }}
        validationSchema={schema}
      >
        <Form>
          <Input label="Headline / Current Position or Title" name="title" />

          <ReactSelect
            label="Education Level (Please choose highest level or equivalent)"
            name="education"
            options={education}
          />

          <ReactSelect label="Status" name="status" options={status} />

          <Input label="School or organization name" name="schoolOrg" />

          <ReactSelect
            label="Occupation"
            name="occupation"
            options={occupation}
          />

          <ReactSelect
            label="Professional Field"
            name="field"
            options={field}
          />

          <Buttons
            onSkip={() => history.push("/profile-skills")}
            next="Skills"
          />
        </Form>
      </Formik>
    </Layout>
  );
};

export default Professional;
