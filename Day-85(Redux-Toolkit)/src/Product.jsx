import { useDispatch } from "react-redux";

import { additem } from "./redux_toolkit/slice";

function ProductPage() {
  const dispatch = useDispatch();
  const products = [
    {
      id: 1,
      name: "Shoes",
      price: 1999,
      img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTW_AxOx3UBoIM0VqNaXzsvE1QvgvPqEJY9D2hBbhEWqSxI4GX0oEfxo0ev0TMpWU0rMIRssqIt5WVMsHb9kB-ezGAFHhfIEpm-yB8URHKHEr1xVdqPyeceMgc",
    },
    {
      id: 2,
      name: "Watch",
      price: 2999,
      img: "https://cdn.shopify.com/s/files/1/0552/3269/2430/files/Artemis_watch_2.0_product_card.webp?v=1758018396&width=800&height=800&crop=center",
    },
    {
      id: 3,
      name: "Bag",
      price: 1499,
      img: "https://carriall.com/cdn/shop/files/ArcgreyBlack.png?v=1706616252&width=800",
    },
    {
      id: 4,
      name: "Headphones",
      price: 2499,
      img: "https://shop.zebronics.com/cdn/shop/files/Zeb-Duke-pic-1.jpg?v=1710569970&width=1200",
    },
  ];

  return (
    <>
      <div className="product-page">
        <h1 className="title">Products</h1>

        <div className="product-grid">
          {products.map((item) => (
            <div key={item.id} className="card">
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
              <button className="btn" onClick={() => dispatch(additem(1))}>
                Add to Cart
              </button>
              <button
                className="btn remove-btn"
                onClick={() => dispatch(additem(-1))}
              >
                Remove from Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* CSS */}
      <style>{`
        body {
          background: #f5f5f5;
          font-family: sans-serif;
        }

        .product-page {
          padding: 40px;
        }

        .title {
          text-align: center;
          margin-bottom: 30px;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 25px;
        }

        .card {
          background: white;
          padding: 20px;
          border-radius: 10px;
          text-align: center;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          transition: 0.3s;
        }

        .card:hover {
          transform: translateY(-5px);
        }

        .card img {
          width: 100%;
          border-radius: 8px;
        }

        .card h3 {
          margin: 10px 0;
        }

        .card p {
          color: #555;
          margin-bottom: 10px;
        }

        .card button {
          padding: 8px 15px;
          border: none;
         
          color: white;
          border-radius: 5px;
          cursor: pointer;
          transition: 0.3s;
        }

        .card button:hover {
          background: #333;
        }
          
        .card .remove-btn{
            background: red;
            margin-left: 10px;
        }
         .card .remove-btn:hover{
            background: darkred;

        }
            .btn{
            background:green;
        }
         .btn:hover{
            background:darkgreen;
        }
      `}</style>
    </>
  );
}

export default ProductPage;
