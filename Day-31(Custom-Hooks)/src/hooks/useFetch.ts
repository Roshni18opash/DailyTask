import { useState } from "react";

interface FetchState<T> {
  data: T | null; // T mean generic (it could be any type data)
  error: string | null;
  fetchData: () => void;
}

export const useFetch = <T>(url: string): FetchState<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);

const fetchData = async () => {
  try {
    const res = await fetch(url);
    const result = await res.json();
    setData(result);
  } catch {
    setError("Something went wrong");
  }
};
return {data,error,fetchData};
}