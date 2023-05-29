import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { BiSearchAlt } from "react-icons/bi";
import ContactCard from "./components/ContactCard";
import { IoMdPersonAdd } from "react-icons/io";
import { collection, , onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";

import Addandupdate from "./components/Addandupdate";
import Usedisclose from "./hooks/Usedisclose";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nofound from "./components/Nofound";

const App = () => {
  const [contacts, setcontacts] = useState([]);

  const { isOpen, onClose, onOpen } = Usedisclose(false);

  useEffect(() => {
    
    const getcontacts = async () => {
      try {
        const contactsref = collection(db, "contacts");
        // const contactsnap = await getDocs(contactsref);

        onSnapshot(contactsref, (snapshot) => {
          const contactlist = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setcontacts(contactlist);
          return contactlist;
        });
      } catch (error) {
        console.log(error);
      }
    };
    getcontacts();
  }, []);

  const filter = (e) => {
    const value = e.target.value;
    const contactsref = collection(db, "contacts");
    // const contactsnap = await getDocs(contactsref);

    onSnapshot(contactsref, (snapshot) => {
      const contactlist = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      // filter function
      const filteredcontacts = contactlist.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );
      setcontacts(filteredcontacts);
      return filteredcontacts;
    });
  };

  return (
    <>
      <div className="mx-auto max-w-[370px]  px-4">
        <Navbar />
        <div className="flex gap-2 ">
          <div className=" relative flex flex-grow items-center   ">
            <BiSearchAlt className=" absolute ml-2 text-2xl text-white" />
            <input
              onChange={filter}
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
          {contacts.length <= 0 ? (
            <Nofound />
          ) : (
            contacts.map((contact) => (
              <ContactCard key={contact} contact={contact} />
            ))
          )}
        </div>
      </div>
      <Addandupdate onClose={onClose} isOpen={isOpen} />
      <ToastContainer position="bottom-center" />
    </>
  );
};

export default App;
