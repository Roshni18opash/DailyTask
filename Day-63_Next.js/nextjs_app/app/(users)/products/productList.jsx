"use client";
import { useSearchParams } from "next/navigation";

const ProductList = () => {
  const searchParams = useSearchParams();

  const pages = searchParams.getAll("page"); //multiple value
  const category = searchParams.get("category");
  const sort = searchParams.get("sort");
  console.log("inside:", pages, category, sort);
  return (
    <div>
      <h1>(client)Product List</h1>
    </div>
  );
};
export default ProductList;
