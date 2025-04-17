import { getProducts } from "@/api/products.js";
import { useEffect, useState } from "react";

export default function useGetProducts({ params }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProducts({ params }).then((data) => {
      setData(data);
      setIsLoading(false);
    });
  }, [params._limit]);

  return { data, isLoading };
}
