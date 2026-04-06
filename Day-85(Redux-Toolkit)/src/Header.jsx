import React from "react";
import AddToCart from "./AddToCart";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="logo">MyShop</div>

        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">Product</a>
        </nav>
        <AddToCart />
      </header>

      {/* Internal CSS */}
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: sans-serif;
        }

        body {
          background: #f5f5f5;
        }

        .header {
          width: 100%;
          background: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 40px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .logo {
          font-size: 22px;
          font-weight: bold;
          color: #333;
        }

        .nav {
          display: flex;
          gap: 25px;
        }

        .nav a {
          text-decoration: none;
          color: #555;
          font-size: 16px;
          transition: 0.3s;
        }

        .nav a:hover {
          color: #000;
        }

        .cart {
          position: relative;
          font-size: 22px;
          cursor: pointer;
        }

        .cart-count {
          position: absolute;
          top: -8px;
          right: -10px;
          background: red;
          color: white;
          font-size: 12px;
          padding: 2px 6px;
          border-radius: 50%;
        }
      `}</style>
    </>
  );
};

export default Header;
