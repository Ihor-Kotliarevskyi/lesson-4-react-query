import { useId } from "react";
import { Formik, Form, Field } from "formik";
import styles from "./OrderForm.module.css";

export default function OrderForm() {
  const fieldId = useId();

  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Form className={styles.form}>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Client Info</legend>

          <label className={styles.label} htmlFor={`${fieldId}-username`}>
            Name
          </label>
          <Field
            className={styles.field}
            type="text"
            name="username"
            id={`${fieldId}-username`}
          />

          <label className={styles.label} htmlFor={`${fieldId}-email`}>
            Email
          </label>
          <Field
            className={styles.field}
            type="email"
            name="email"
            id={`${fieldId}-email`}
          />
        </fieldset>

        <button className={styles.btn} type="submit">
          Place order
        </button>
      </Form>
    </Formik>
  );
}
