import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Link href="/login">Login </Link>
      <br />
      <Link href="/dashboard">Dashboard </Link>
    </>
  );
};

export default Home;
