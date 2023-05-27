import { addDoc, collection } from "firebase/firestore";
import Modal from "./Modal";
import { Formik, Form, Field } from "formik";
import { db } from "../config/firebase";

// add contact function
const Addandupdate = ({ isOpen, onClose }) => {
  const addcontact = async (contact) => {
    try {
      // a ref with database and name of db
      const contactref = collection(db, "contacts");
      //   add doc to db
      await addDoc(contactref, contact);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik
          initialValues={{
            name: "",
            email: "",
          }}
          onSubmit={(values) => {
            // by click on add call this function
            addcontact(values);
          }}
        >
          <Form className="flex flex-col gap-3  ">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <Field name="name" className="h-8 border" />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <Field name="email" type="email" className="h-8 border" />
            </div>
            <button className="self-end border bg-orange px-3 py-1.5 ">
              Add
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default Addandupdate;
