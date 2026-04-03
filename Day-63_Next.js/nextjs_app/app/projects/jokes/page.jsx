// "use client";

// import { useEffect, useState } from "react";

// const JokeGenerator = () => {
//   const [randomJoke, setRandomJoke] = useState({});
//   const [showJoke, setShowJoke] = useState(false);
//   const [loading, setLoading] = useState(true);

//   const fetchJoke = async () => {
//     setLoading(true);
//     const res = await fetch(
//       "https://official-joke-api.appspot.com/random_joke",
//     );

//     const data = await res.json();
//     setRandomJoke(data);
//     setShowJoke(false);
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchJoke();
//   }, []);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 to-orange-200 p-4">
//       <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center border border-orange-200">
//         <h1 className="text-3xl font-bold text-gray-800 mb-6">
//           😂 Random Joke Generator
//         </h1>

//         {loading ? (
//           <p className="text-gray-500 animate-pulse">Loading joke...</p>
//         ) : (
//           <>
//             <p className="text-lg text-gray-700 mb-4 font-medium">
//               {randomJoke.setup}
//             </p>

//             {showJoke && (
//               <p className="text-xl text-orange-600 font-bold bg-orange-50 p-3 rounded-lg border border-orange-200 mb-4">
//                 {randomJoke.punchline}
//               </p>
//             )}

//             {!showJoke ? (
//               <button
//                 onClick={() => setShowJoke(true)}
//                 className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold shadow-md transition duration-200"
//               >
//                 view Answer
//               </button>
//             ) : (
//               <button
//                 onClick={fetchJoke}
//                 className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded-lg font-semibold transition duration-200"
//               >
//                 Next Joke
//               </button>
//             )}
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default JokeGenerator;
"use client";

import { useEffect, useState } from "react";

const JokeGenerator = () => {
  const [randomJoke, setRandomJoke] = useState({});
  const [showJoke, setShowJoke] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJoke = async () => {
      setLoading(true);

      const res = await fetch(
        "https://official-joke-api.appspot.com/random_joke",
      );

      const data = await res.json();

      setRandomJoke(data);
      setShowJoke(false);
      setLoading(false);
    };

    fetchJoke();
  }, []);

  const handleNextJoke = async () => {
    setLoading(true);

    const res = await fetch(
      "https://official-joke-api.appspot.com/random_joke",
    );

    const data = await res.json();

    setRandomJoke(data);
    setShowJoke(false);
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-yellow-100 to-orange-200 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center border border-orange-200">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          😂 Random Joke Generator
        </h1>

        {loading ? (
          <p className="text-gray-500 animate-pulse">Loading joke...</p>
        ) : (
          <>
            <p className="text-lg text-gray-700 mb-4 font-medium">
              {randomJoke.setup}
            </p>

            {showJoke && (
              <p className="text-xl text-orange-600 font-bold bg-orange-50 p-3 rounded-lg border border-orange-200 mb-4">
                {randomJoke.punchline}
              </p>
            )}

            {!showJoke ? (
              <button
                onClick={() => setShowJoke(true)}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold shadow-md transition duration-200"
              >
                View Answer
              </button>
            ) : (
              <button
                onClick={handleNextJoke}
                className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded-lg font-semibold transition duration-200"
              >
                Next Joke
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default JokeGenerator;
