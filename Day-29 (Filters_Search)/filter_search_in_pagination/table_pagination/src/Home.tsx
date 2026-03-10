import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import Pagination from "react-bootstrap/Pagination";
import Table from "react-bootstrap/Table";
import "./Home.css";
interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}
interface HomeProps {
  search: string;
}

const Home = ({ search }: HomeProps) => {
  //all product ne save kre che
  const [data, setData] = useState<Product[]>([]);
  //current page no. che
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  const itemsPerPage = 5;
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      setLoading(true);
      const response = await axios.get<{ products: Product[] }>(
        "https://dummyjson.com/products",
      );
      setData(response.data.products); //state ma products store krse
      setLoading(false);
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   setPage(1);
  // }, [search]);
  const filteredData = data.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.price.toString().includes(search) ||
      item.id.toString().includes(search),
  );
  const start = (page - 1) * itemsPerPage;
  const pageData = filteredData.slice(start, start + itemsPerPage);
  const pageCount = Math.ceil(filteredData.length / itemsPerPage);

  const handleNext = () => {
    if (page < pageCount) setPage(page + 1);
  };

  const handlePrevious = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <div className="container mt-4">
      <h1>Product List</h1>

      <Table bordered responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Image</th>
          </tr>
        </thead>

        <tbody>
          {loading ? (
            <tr>
              <td colSpan={4} className="text-center">
                Loading <Spinner animation="grow" size="sm" />
              </td>
            </tr>
          ) : pageData.length > 0 ? (
            pageData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    style={{ width: "80px", height: "80px" }}
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="text-center">
                No results found
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      <div className="d-flex justify-content-end">
        <Pagination>
          <Pagination.Prev onClick={handlePrevious} disabled={page === 1} />

          {[...Array(pageCount)].map((_, idx) => (
            <Pagination.Item
              key={idx}
              active={page === idx + 1}
              onClick={() => setPage(idx + 1)}
            >
              {idx + 1}
            </Pagination.Item>
          ))}

          <Pagination.Next onClick={handleNext} disabled={page === pageCount} />
        </Pagination>
      </div>
    </div>
  );
};

export default Home;
