// eslint-disable-next-line react/prop-types
import { HiOutlineUser, HiOutlineUserAdd } from "react-icons/hi";
import { CiEdit } from "react-icons/ci";
import { IoMdTrash } from "react-icons/io";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import Addandupdate from "./Addandupdate";
import Usedisclose from "../hooks/Usedisclose";
import { toast } from "react-toastify";

// function to delete contact
const ContactCard = ({ contact }) => {
  const { isOpen, onClose, onOpen } = Usedisclose(false);

  const deletecontact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      toast.success("Deleted Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        key={contact.id}
        className="flex items-center justify-between rounded-lg bg-yellow p-2"
      >
        <div className="flex gap-1">
          <HiOutlineUser className="text-3xl text-orange" />
          <div className="">
            <h2 className="font-medium">{contact.name}</h2>
            <p className="text-sm">{contact.email}</p>
          </div>
        </div>
        <div className="flex text-2xl">
          <CiEdit onClick={onOpen} className="cursor-pointer" />
          <IoMdTrash
            onClick={() => deletecontact(contact.id)}
            className="cursor-pointer text-orange"
          />
        </div>
      </div>
      <Addandupdate
        contact={contact}
        isOpen={isOpen}
        onClose={onClose}
        isUpdate
      />
    </>
  );
};

export default ContactCard;
