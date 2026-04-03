import React from "react";
import { useState } from "react";
import { Data } from "./Data";

const Company = () => {
  const [store] = useState(Data);
  const [data, setData] = useState("");

  const getData = (e) => {
    console.log(e.target.value);
    setData(e.target.value);
  };
  let filterData = store.filter((curValue) => {
    return (
      (curValue.name || "").toLowerCase().includes(data) ||
      (curValue.industry || "").toLowerCase().includes(data) ||
      (curValue.ceoName || "").toLowerCase().includes(data) ||
      (curValue.country || "").toLowerCase().includes(data)
    );
  });

  return (
    <div className="container">
      <h1>Company Brands</h1>
      <div className="search-bar">
        <input
          type="search"
          name="search"
          placeholder="Search by Company Name, Country, Industry, CEO Name"
          onChange={getData}
        />
        <button className="search-btn">Search</button>
      </div>
      {/* {
    "id": 1,
    "name": "Zulauf - Lubowitz",
    "address": "9639 Milan Springs",
    "zip": "82209",
    "country": "Uzbekistan",
    "employeeCount": 1929,
    "industry": "Technology",
    "marketCap": 8109672313,
    "domain": "likely-disappointment.net",
    "logo": "https://example.com/logo1.png",
    "ceoName": "Cecile McClure"
  }, */}
      <table className="company-table bordered-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Industry</th>
            <th>Country</th>
            <th>CEO</th>
          </tr>
        </thead>

        <tbody>
          {filterData.length > 0 ? (
            filterData.map((cur) => (
              <tr key={cur.id}>
                <td>{cur.name}</td>
                <td>{cur.industry}</td>
                <td>{cur.country}</td>
                <td>{cur.ceoName}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                No results found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Company;
