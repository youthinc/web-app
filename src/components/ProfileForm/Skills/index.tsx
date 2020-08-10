import ReactSelectMulti from "components/form/ReactSelectMulti";
import { hardSkills, softSkills } from "constants/individual";
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

const Skills = () => {
  const user = useAuthCtx()!;
  const history = useHistory();
  const [data, loading, error] = useDocumentDataOnce<FormValues>(
    fs.doc(`skills/${user.uid}`)
  );

  if (loading || error) return null;

  return (
    <Layout title="Skills">
      <Formik
        initialValues={data || initialValues}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit(values, user.uid).then(() => {
            setSubmitting(false);
            history.push("/profile-availability");
          });
        }}
        validationSchema={schema}
      >
        <Form>
          <ReactSelectMulti
            label="Soft Skills. Please check up to 3 choices that may apply"
            name="softSkills"
            options={softSkills}
          />

          <ReactSelectMulti
            label="Hard Skill. Please check up to 3 choices that may apply"
            name="hardSkills"
            options={hardSkills}
          />

          <Buttons
            onSkip={() => history.push("/profile-availability")}
            next="Availability"
          />
        </Form>
      </Formik>
    </Layout>
  );
};

export default Skills;
