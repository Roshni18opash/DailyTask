"use client";
import { data } from "framer-motion/client";
import { useEffect, useState } from "react";

// RSC transform into client component
//we can use react components and hooks in this file
//no use async await in client component only use in seerver component

const ClientComp = () => {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      // console.log(data);
      setPostData(data);
      return data;
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Hello, Client Component!</h1>
      <button
        onClick={() => alert("hii")}
        className="bg-amber-400 text-black p-5"
      >
        Click me
      </button>
      return(
      <ul className="grid grid-cols-3 gap-5">
        {postData.map((curElem, index) => {
          return <li key={index}>{curElem.body}</li>;
        })}
      </ul>
      )
    </>
  );
};
export default ClientComp;
