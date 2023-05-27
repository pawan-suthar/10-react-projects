import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import Modal from "./Modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { db } from "../config/firebase";
import { toast } from "react-toastify";
import * as Yup from "yup";

const validation = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});

// add contact function
const Addandupdate = ({ isOpen, onClose, isUpdate, contact }) => {
  const addcontact = async (contact) => {
    try {
      // a ref with database and name of db
      const contactref = collection(db, "contacts");
      //   add doc to db
      await addDoc(contactref, contact);
      onClose();
      toast.success("Added Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const updatecontact = async (contact, id) => {
    try {
      // a ref with database and name of db
      const contactref = doc(db, "contacts", id);
      //   add doc to db
      await updateDoc(contactref, contact);
      onClose();
      toast.success("Update Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik
          validationSchema={validation}
          initialValues={
            isUpdate
              ? {
                  name: contact.name,
                  email: contact.email,
                }
              : {
                  name: "",
                  email: "",
                }
          }
          onSubmit={(values) => {
            isUpdate
              ? updatecontact(values, contact.id)
              : // by click on add call
                addcontact(values);
          }}
        >
          <Form className="flex flex-col gap-3  ">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <Field name="name" className="h-8 border" />
              <div className="text-xs text-red-500">
                <ErrorMessage name="name" />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <Field name="email" type="email" className="h-8 border" />
              <div className="text-xs text-red-500">
                <ErrorMessage name="email" />
              </div>
            </div>
            <button className="self-end border bg-orange px-3 py-1.5 ">
              {isUpdate ? "Update" : "Add"}
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default Addandupdate;
