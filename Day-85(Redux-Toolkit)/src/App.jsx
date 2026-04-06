import Header from "./Header";
import ProductPage from "./Product";
import { useDispatch } from "react-redux";
import { clearitem } from "./redux_toolkit/slice";

function App() {
  const dispatch = useDispatch();
  return (
    <>
      <Header />
      <ProductPage />
      <button className="btn card" onClick={() => dispatch(clearitem())}>
        Clear Cart
      </button>
    </>
  );
}

export default App;
