import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const BabbleReset = () => {

  return (
    <div className="relative h-screen flex flex-col justify-center items-center bg-black">
      {/* Timer or Stop Text */}
      <Link to={'/'} className="relative z-10  bg-white w-48 h-48 rounded-full flex justify-center items-center text-4xl text-black ">
        Done
        {/* Resume Button */}
        <Link to={'/babblewave'} className=" absolute -right-[10rem] ht-0 bg-orange-300 w-32 h-32 rounded-full flex justify-center items-center text-2xl text-black font-normal">
          Resume
        </Link>
      </Link>

      {/* Icon or Button */}
      <div className="relative z-10 mt-8 bg-white w-16 h-16 rounded-full flex justify-center items-center text-2xl text-orange-400">
      <AiOutlineDelete />
      </div>
    </div>
  );
};

export default BabbleReset;
