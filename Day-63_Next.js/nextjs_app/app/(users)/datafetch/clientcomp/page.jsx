"use client";

import { useState } from "react";

const GenderClientPage = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [probability, setProbability] = useState("");
  const [count, setCount] = useState("");
  const [error, setError] = useState("");

  const getGender = async () => {
    setError("");
    setGender("");
    setProbability("");
    setCount("");

    const nameRegex = /^[A-Za-z]+$/;

    if (!nameRegex.test(name)) {
      setError("Please enter only alphabet letters");
      return;
    }

    // const res = await fetch(`https://api.genderize.io/?name=${name}`);
    const data = await res.json();

    if (!data.gender) {
      setError("Gender not found");
    } else {
      setGender(data.gender);
      setProbability(data.probability);
      setCount(data.count);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-black p-8 rounded-xl shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-4">Gender Finder</h1>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded w-full mb-4"
        />

        <button
          onClick={getGender}
          className="bg-blue-500 rounded-2xl text-white px-4 py-2 hover:bg-blue-600 transition"
        >
          Check Gender
        </button>

        {gender && (
          <div className="mt-6 bg-gray-900 text-white p-6 rounded-xl shadow-lg w-full max-w-sm mx-auto">
            <h2 className="text-xl font-semibold mb-4 text-blue-400">
              Gender Result
            </h2>

            <div className="space-y-2 text-left">
              <p>
                <span className="font-semibold text-gray-400">Name:</span>{" "}
                <span className="text-white">{name}</span>
              </p>

              <p>
                <span className="font-semibold text-gray-400">Gender:</span>{" "}
                <span className="text-green-400 capitalize">{gender}</span>
              </p>

              <p>
                <span className="font-semibold text-gray-400">
                  Probability:
                </span>{" "}
                <span className="text-yellow-400">
                  {(probability * 100).toFixed(1)}%
                </span>
              </p>

              <p>
                <span className="font-semibold text-gray-400">Count:</span>{" "}
                <span className="text-purple-400">{count}</span>
              </p>
            </div>
          </div>
        )}

        {error && <p className="mt-4 text-red-500">{error}</p>}
      </div>
    </div>
  );
};
export default GenderClientPage;
// //http://localhost:3000/datafetch/clientcomp
// "use client";

// import { useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";

// const GenderClientPage = (props) => {
//   const [userInfo, setUserInfo] = useState({});
//   //const searchParams = props.searchParams;
//   const searchParams = useSearchParams();
//   const userName = searchParams.get("name");

//   useEffect(() => {
//     const revelUserGender = async () => {
//       const res = await fetch(`https://api.genderize.io/?name=${userName}`);
//       const userData = await res.json();
//       console.log(userData);
//       setUserInfo(userData);
//     };
//     revelUserGender();
//   }, []);
//   if (!userInfo.gender) return null;
//   if (!data.gender) {
//     setError("Gender not found");
//   } else {
//     setGender(data.gender);
//     setProbability(data.probability);
//     setCount(data.count);
//   }
// };

// return (
//   <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//     <div className="bg-black p-8 rounded-xl shadow-lg text-center">
//       <h1 className="text-2xl font-bold mb-4">Gender Finder</h1>

//       <input
//         type="text"
//         placeholder="Enter Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         className="border p-2 rounded w-full mb-4"
//       />

//       <button
//         onClick={getGender}
//         className="bg-blue-500 rounded-2xl text-white px-4 py-2 hover:bg-blue-600 transition"
//       >
//         Check Gender
//       </button>

//       {gender && (
//         <div className="mt-6 bg-gray-900 text-white p-6 rounded-xl shadow-lg w-full max-w-sm mx-auto">
//           <h2 className="text-xl font-semibold mb-4 text-blue-400">
//             Gender Result
//           </h2>

//           <div className="space-y-2 text-left">
//             <p>
//               <span className="font-semibold text-gray-400">Name:</span>{" "}
//               <span className="text-white">{userInfo.name}</span>
//             </p>

//             <p>
//               <span className="font-semibold text-gray-400">Gender:</span>{" "}
//               <span className="text-green-400 capitalize">
//                 {userInfo.gender}
//               </span>
//             </p>

//             <p>
//               <span className="font-semibold text-gray-400">Probability:</span>{" "}
//               <span className="text-yellow-400">
//                 {(userInfo.probability * 100).toFixed(1)}%
//               </span>
//             </p>

//             <p>
//               <span className="font-semibold text-gray-400">Count:</span>{" "}
//               <span className="text-purple-400">{userInfo.count}</span>
//             </p>
//           </div>
//         </div>
//       )}

//       {error && <p className="mt-4 text-red-500">{error}</p>}
//     </div>
//   </div>
// );

// export default GenderClientPage;
// // //http://localhost:3000/datafetch/clientcomp
