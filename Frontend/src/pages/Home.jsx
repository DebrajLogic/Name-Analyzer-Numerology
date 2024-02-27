import { useState } from "react";
import axios from "axios";

function Home() {
  const [name, setName] = useState("");
  const [data, setData] = useState(null);

  const analyzeName = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/analyze?name=${name}`
      );
      setData(response?.data?.data);
    } catch (error) {
      console.log("Error Fetching Data", error);
    }
  };
  return (
    <div className="px-1 py-2 sm:p-4 bg-[#242424] min-h-screen h-auto w-full flex justify-center items-center text-center">
      <div className="flex-col px-4 sm:px-20 w-full sm:w-8/12">
        <h1 className="text-4xl sm:text-7xl font-bold text-white">
          Your Name Analysis Based On Numerology
        </h1>

        {/* Input Div */}
        <div className=" mt-16 sm:mt-24 mb-5 sm:mb-10 flex justify-center items-center text-lg sm:text-2xl sm:mx-10 w-auto">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter Name"
            className="px-2 sm:px-4 py-1 sm:py-2 outline-none rounded-l-full sm:w-10/12"
          />
          <button
            onClick={analyzeName}
            className="px-2 sm:px-4 py-1 sm:py-2 bg-gray-400 rounded-r-full hover:bg-gray-500"
          >
            Analyze
          </button>
        </div>

        {/* Result Div */}
        {data && (
          <div className="bg-gray-800 rounded-md p-6 mt-6">
            <p className="text-white text-lg mb-4 flex items-center justify-center gap-2">
              Your name total is:{" "}
              <span className="text-2xl font-medium text-blue-400 px-2 py-1 shadow-inner shadow-blue-500 rounded-full">
                {data?.total}
              </span>
            </p>
            <p className="text-white text-lg mb-4">{data?.meaning}</p>
            <p className="text-white text-lg mb-4">
              Your name has 4 or 8?{" "}
              <span className="font-medium text-blue-400">{data?.flag}</span>
            </p>
            <p className="text-white text-lg">
              Result:{" "}
              <span className="font-medium text-blue-400">
                {data?.result || "Coming Soon"}
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
