const ServerComp = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data);
  return (
    <>
      <h1>Hello, server Component!</h1>
      <ul className="grid grid-cols-3 gap-5">
        {data.map((curElem, index) => {
          return <li key={index}>{curElem.body}</li>;
        })}
      </ul>
    </>
  );
};
export default ServerComp;
