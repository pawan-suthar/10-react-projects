// eslint-disable-next-line react/prop-types
import { HiOutlineUser } from "react-icons/hi";
import { CiEdit } from "react-icons/ci";
import { IoMdTrash } from "react-icons/io";

const ContactCard = ({ contact }) => {
  return (
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
        <CiEdit />
        <IoMdTrash className="text-orange" />
      </div>
    </div>
  );
};

export default ContactCard;
