import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import Pagination from "react-bootstrap/Pagination";
import "./Home.css";

const Home = () => {
  const [data, setData] = useState([]);
  // console.log(data);
  const [pageData, setPageData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  const getData = async () => {
    const response = await axios.get("https://dummyjson.com/products");
    setData(response.data.products);
  };
  //next and previous button handlers
  const handleNext = () => {
    if (page === pageCount) {
      return page;
    }
    setPage(page + 1);
  };
  const handlePrevios = () => {
    if (page === 1) {
      return page;
    }
    setPage(page - 1);
  };

  useEffect(() => {
    getData();
  }, [page]);

  useEffect(() => {
    const pageDataCount = Math.ceil(data.length / 5);
    setPageCount(pageDataCount);
    if (page) {
      const max = 5;
      const totalData = max * page;
      const totalPages = data.slice(
        page === 1 ? 0 : totalData - max,
        totalData,
      );
      setPageData(totalPages);
    }
  }, [data]);

  return (
    <>
      <div className="container">
        <h1>Product List</h1>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Images</th>
            </tr>
          </thead>
          <tbody>
            {pageData.length > 0 ? (
              pageData.map((item, idx) => {
                return (
                  <>
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.title}</td>
                      <td>{item.price}</td>
                      <td>
                        <img
                          src={item.thumbnail}
                          style={{ width: "100px", height: "100px" }}
                          alt={item.name}
                        ></img>
                      </td>
                    </tr>
                  </>
                );
              })
            ) : (
              <tr className="loading-row">
                <td colSpan="4">
                  <div className="loading-container">
                    Loading <Spinner animation="grow" size="sm" />
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="d-flex justify-content-end pagination-container">
          <Pagination>
            <Pagination.Prev onClick={handlePrevios} disabled={page === 1} />
            {Array(pageCount)
              .fill(null)
              .map((ele, index) => {
                return (
                  <>
                    <Pagination.Item
                      active={page === index + 1 ? true : false}
                      onClick={() => setPage(index + 1)}
                    >
                      {index + 1}
                    </Pagination.Item>
                  </>
                );
              })}
            <Pagination.Next
              onClick={handleNext}
              disabled={page === pageCount}
            />
          </Pagination>
        </div>
      </div>
    </>
  );
};

export default Home;
