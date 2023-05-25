import Navbar from "./components/Navbar";
import { BiSearchAlt } from "react-icons/bi";
import { IoMdPersonAdd } from "react-icons/io";

const App = () => {
  return (
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

        <IoMdPersonAdd className="mt-1 cursor-pointer items-center text-3xl text-white " />
      </div>
    </div>
  );
};

export default App;
