import { useState } from "react";
import axios from "axios";

function App() {
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
    <div className="p-4 bg-[#242424] h-screen w-full flex justify-center items-center text-center">
      <div className="px-20 w-8/12">
        <h1 className="text-7xl font-bold text-white">Analyze Your Name</h1>

        {/* Input Div */}
        <div className="mt-24 mb-10 flex justify-center items-center text-2xl sm:mx-10">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter Name"
            className="px-4 py-2 outline-none rounded-l-full w-10/12"
          />
          <button
            onClick={analyzeName}
            className="px-4 py-2 bg-gray-400 rounded-r-full hover:bg-gray-500"
          >
            Analyze
          </button>
        </div>

        {/* Result Div */}
        {data && (
          <div className="flex flex-col justify-center gap-4 text-center text-white text-xl">
            <p>
              Your name total is:{" "}
              <span className="font-medium">{data?.total}</span>
            </p>
            <p className="my-4 font-medium mx-auto">{data?.meaning}</p>
            <p>
              Your name has 4 or 8?{" "}
              <span className="font-medium">{data?.flag}</span>
            </p>
            <p className="py-4">
              Result:{" "}
              <span className="font-medium">
                {data?.result || "Coming Soon"}
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
