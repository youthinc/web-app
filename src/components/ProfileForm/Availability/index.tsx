import Input from "components/form/Input";
import ReactSelect from "components/form/ReactSelect";
import ReactSelectMulti from "components/form/ReactSelectMulti";
import { contact, days, times } from "constants/individual";
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
import { ServerValues } from "./types";

const Availability = () => {
  const user = useAuthCtx()!;
  const history = useHistory();
  const [data, loading, error] = useDocumentDataOnce<ServerValues>(
    fs.doc(`availability/${user.uid}`)
  );

  if (loading || error) return null;

  return (
    <Layout title="Availability">
      <Formik
        initialValues={data || initialValues}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit(values, user.uid).then(() => {
            setSubmitting(false);
            history.push("/");
          });
        }}
        validationSchema={schema}
      >
        <Form>
          <ReactSelect name="days" label="Days available" options={days} />

          <ReactSelect name="times" label="Times Available" options={times} />

          <Input label="Days/Times Available" name="dayTimes" />

          <ReactSelectMulti
            label="Prefered way of contact: Please check up to 3 choices that may apply"
            name="contact"
            options={contact}
          />

          <Input label="Any Comment, Feedback" name="feedback" />

          <Buttons onSkip={() => history.push("/")} next="Done" />
        </Form>
      </Formik>
    </Layout>
  );
};

export default Availability;
