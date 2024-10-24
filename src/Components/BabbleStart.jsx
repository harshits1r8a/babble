import { BsSoundwave } from "react-icons/bs";
import { PiShareNetwork } from "react-icons/pi";
import { Link } from "react-router-dom";
const BabbleStart = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black">
      {/* <!-- Top Title --> */}
      <div className="absolute top-4 text-white text-3xl font-semibold">
        <span
          className="text-2xl font-medium"
          style={{ fontFamily: "cursive" }}
        >
          babble
        </span>
      </div>

      {/* <!-- Main Container --> */}
      <div className="w-full max-w-[80%] h-full max-h-[80%] border border-gray-600 relative rounded-lg flex flex-col items-center justify-center">
        {/* <!-- Circle in the Center --> */}
        <Link to={'/babblewave'} className="relative bg-black glow-circle rounded-full w-48 h-48 flex items-center justify-center text-white text-xl font-bold border border-orange-400 group">
          Babble
          <div className="absolute top-0 left-0 z-30 h-full w-full border border-orange-400 rounded-full group-hover:scale-90 transition duration-300 ease-in-out"></div>
          <div className="absolute top-0 left-0 z-30 h-full w-full border border-orange-400 rounded-full group-hover:scale-75 transition duration-300 ease-in-out"></div>
        </Link>

        {/* <!-- Bottom Icons --> */}
        <div className="absolute  -bottom-7 flex gap-8 ">
          {/* <!-- Icon 1 --> */}
          <div className="bg-black border border-gary-700 p-4 rounded-full text-orange-400 hover:bg-orange-400 hover:text-black cursor-pointer transitio duration-300 ease-in-out">
            <PiShareNetwork />
          </div>

          {/* <!-- Icon 2 --> */}
          <div className="bg-black border border-gary-700 p-4 rounded-full text-orange-400 hover:bg-orange-400 hover:text-black cursor-pointer transitio duration-300 ease-in-out">
            <BsSoundwave />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BabbleStart;
