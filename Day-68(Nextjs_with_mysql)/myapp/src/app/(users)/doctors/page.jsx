import { db } from "../../config/db";
const StaticPage = async () => {
  const [doctors] = await db.execute("SELECT * FROM doctorss");
  console.log(doctors);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 min-h-screen flex flex-col">
      <h1 className="text-3xl font-bold text-white text-center py-5">
        Doctor List
      </h1>
      <div className="flex-1 overflow-y-auto px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {doctors.map((doc) => (
              <div
                key={doc.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-5"
              >
                <div className="flex justify-center">
                  <img
                    src={
                      doc.image ||
                      "https://randomuser.me/api/portraits/men/1.jpg"
                    }
                    alt={doc.name}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                </div>
                <div className="text-center mt-4">
                  <h2 className="text-md font-semibold text-gray-800">
                    {doc.name}
                  </h2>

                  <p className="text-sm text-indigo-600">
                    {doc.specialization}
                  </p>

                  <p className="mt-2 text-green-600 font-semibold">
                    ₹{doc.fees}
                  </p>
                </div>
                <div className="mt-3 text-sm text-gray-600 text-center space-y-1">
                  <p>
                    Exp:{" "}
                    <span className="text-purple-600 font-semibold">
                      {doc.experience} yrs
                    </span>
                  </p>
                  <p>{doc.hospital}</p>
                </div>
                <button className="mt-4 w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition">
                  Book Appointment
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default StaticPage;
