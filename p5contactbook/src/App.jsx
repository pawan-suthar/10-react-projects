import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { BiSearchAlt } from "react-icons/bi";
import ContactCard from "./components/ContactCard";
import { IoMdPersonAdd } from "react-icons/io";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
import Modal from "./components/Modal";

const App = () => {
  const [contacts, setcontacts] = useState([]);

  const [isOpen, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const getcontacts = async () => {
      try {
        const contactsref = collection(db, "contacts");
        const contactsnap = await getDocs(contactsref);
        const contactlist = contactsnap.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setcontacts(contactlist);
      } catch (error) {
        console.log(error);
      }
    };
    getcontacts();
  }, []);

  return (
    <>
      <div className="mx-auto max-w-[370px]  px-4">
        <Navbar />
        <div className="flex gap-2 ">
          <div className=" relative flex flex-grow items-center   ">
            <BiSearchAlt className=" absolute ml-2 text-2xl text-white" />
            <input
              type="text"
              className="h-10 flex-grow rounded-md border border-white bg-transparent pl-9 text-white"
            />
          </div>

          <IoMdPersonAdd
            onClick={onOpen}
            className="mt-1 cursor-pointer items-center text-3xl text-white "
          />
        </div>
        <div className="mt-4 flex flex-col gap-3">
          {contacts.map((contact) => (
            <ContactCard key={contact} contact={contact} />
          ))}
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={onClose}>
        hii dfsdfsdfdsfsd
      </Modal>
    </>
  );
};

export default App;
