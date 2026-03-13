import ProductList from "./productList";

const products = async ({ searchParams }) => {
  const params = await searchParams;
  console.log(params);

  const category = params?.category || "all";
  const sort = params?.sort || "default";
  const page = params?.page || 1;

  return (
    <div>
      <h1>Product Page</h1>
      <p>Category: {category}</p>
      <p>Sort: {sort}</p>
      <p>Page: {page}</p>
      <ProductList />
    </div>
  );
};
export default products;
