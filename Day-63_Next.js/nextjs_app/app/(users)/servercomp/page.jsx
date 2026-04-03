const ServerComp = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-black mb-8">
        Posts Dashboard
      </h1>

      <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.slice(0, 12).map((curElem) => {
          return (
            <li
              key={curElem.id}
              className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition duration-300"
            >
              <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {curElem.title}
              </h2>

              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {curElem.body}
              </p>

              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-400">
                  Post ID: {curElem.id}
                </span>

                <button className="bg-blue-500 text-white text-sm px-3 py-1 rounded-lg hover:bg-blue-600">
                  Read More
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ServerComp;
