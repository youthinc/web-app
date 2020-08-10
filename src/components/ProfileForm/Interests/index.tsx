import Input from "components/form/Input";
import ReactSelect from "components/form/ReactSelect";
import ReactSelectMulti from "components/form/ReactSelectMulti";
import { activities, interests } from "constants/individual";
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
import Roles from "./Roles";
import { schema } from "./schema";
import { FormValues } from "./types";

const Interests = () => {
  const user = useAuthCtx()!;
  const history = useHistory();
  const [data, loading, error] = useDocumentDataOnce<FormValues>(
    fs.doc(`interests/${user.uid}`)
  );

  if (loading || error) return null;

  return (
    <Layout title="Interests">
      <Formik
        initialValues={data || initialValues}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit(values, user.uid).then(() => {
            setSubmitting(false);
            history.push("/profile-professional");
          });
        }}
        validationSchema={schema}
      >
        <Form>
          <ReactSelect
            name="interests"
            label="Areas of Interest"
            options={interests}
          />

          <Input label="If Other, please specify" name="interest" />

          <Roles />

          <Input label="If Other, please specify" name="role" />

          <ReactSelectMulti
            name="activities"
            label="What activities are you interested in? Please check up to 3 choices that may apply"
            options={activities}
          />

          <Input label="If Other, please specify" name="activity" />

          <Buttons
            onSkip={() => history.push("/profile-professional")}
            next="Professional info"
          />
        </Form>
      </Formik>
    </Layout>
  );
};

export default Interests;
