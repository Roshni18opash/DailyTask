// const DataFetchServer = async () => {
//   const res = await fetch("https://api.genderize.io/?name=Roshni");
//   const data = await res.json();
//   console.log(data);

import { resolve } from "styled-jsx/css";

//   return <h1>Data Fetching - {data.name}</h1>;
// };
// export default DataFetchServer;

//make dynamic use   seachparams
const DataFetchServer = async (props) => {
  const searchParams = await props.searchParams;
  const username = searchParams.name;

await new Promise((resolve)=>{
  setTimeout(()=>{
    resolve();
  },3000)
})
  if (!username) {
    return (
      <div className="text-center mt-20">
        <h1>No Name Provided</h1>
        <p>Please add ?name=YourName in URL</p>
      </div>
    );
  }

  const nameRegex = /^[A-Za-z]+$/;

  if (!nameRegex.test(username)) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-red-500 text-2xl font-bold">Invalid Name</h1>
        <p>Please enter only alphabet letters (A-Z)</p>
      </div>
    );
  }

  //const res = await fetch(`https://api.genderize.io/?name=${username}`);
  const userData = await res.json();
  console.log(userData);
  const percentage = userData.probability * 100;
  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl font-bold">{userData.name}</h1>
      <p className="text-xl mt-4">Gender: {userData.gender}</p>
      <p className="text-xl mt-4">Probability: {percentage.toFixed(1)}%</p>
    </div>
  );
};
export default DataFetchServer;
//http://localhost:3000/datafetch/servercomp?name=Rose
