import CountrySelect from "components/form/CountrySelect";
import Input from "components/form/Input";
import ReactSelect from "components/form/ReactSelect";
import ReactSelectMulti from "components/form/ReactSelectMulti";
import { employees, location, sector, type } from "constants/organization";
import { Form, Formik } from "formik";
import { getFsId } from "lib/firebase";
import * as React from "react";
import { useHistory } from "react-router-dom";
import { handleSubmit } from "./handleSubmit";
import { initialValues } from "./initialValues";
import { schema } from "./schema";
import SubmitBtn from "./SubmitBtn";

const OrganizationForm = () => {
  // const user = useAuthCtx()!;
  const history = useHistory();
  // const [data, loading, error] = useDocumentDataOnce<FormValues>(
  //   fs.doc(`skills/${user.uid}`)
  // );

  // if (loading || error) return null;

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 600 }}>
        <h1 className="title has-text-centered">Organization sign up</h1>
        <hr />
        <Formik
          initialValues={initialValues}
          onSubmit={(values, { setSubmitting }) => {
            handleSubmit(schema.cast(values) as any, getFsId()).then(() => {
              setSubmitting(false);
              history.push("/");
            });
          }}
          validationSchema={schema}
        >
          <Form>
            <Input label="Organization Name" name="name" />
            <Input label="Organization Intro" name="intro" />
            <ReactSelect label="Organization Type" name="type" options={type} />

            <ReactSelectMulti
              label="Industry/Sector"
              name="sector"
              options={sector}
            />

            <CountrySelect name="country" label="Headquartered Country" />
            <Input label="Year established in Mongolia" name="year" />

            <ReactSelect label="Location" name="location" options={location} />
            <ReactSelect
              label="Number of Employees"
              name="employees"
              options={employees}
            />

            <Input name="ceo" label="Name of CEO or the most senior official" />
            <Input
              name="title"
              label="Title of the most senior representative"
            />
            <Input name="address" label="Address" />
            <Input name="email" label="Email" />
            <Input name="telephone" label="Telephone" />
            <Input name="website" label="Website" />
            <SubmitBtn />
          </Form>
        </Formik>
      </div>
    </section>
  );
};

export default OrganizationForm;
