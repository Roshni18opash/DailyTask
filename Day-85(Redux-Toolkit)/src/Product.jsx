import { useDispatch, useSelector } from "react-redux";

import { additem, removeitem } from "./redux_toolkit/slice";
import { useEffect } from "react";
import { fetchProducts } from "./redux_toolkit/productSlice";

const Product = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const productSelector = useSelector((state) => state.products.items);
  return (
    <>
      <div className="grid">
        {productSelector.map((item) => {
          return (
            <div className="card" key={item.id}>
              <img src={item.thumbnail} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
              <div className="btn-group">
                <button className="btn" onClick={() => dispatch(additem(item))}>
                  Add to Cart
                </button>
                <button
                  className="btn"
                  onClick={() => dispatch(removeitem(item.id))}
                >
                  Remove from Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Product;
