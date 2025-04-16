import { axios } from "@/utils/axios.js";

async function getProducts({ params }) {
  const res = await axios.get("/products", { params });
  return res.data;
}

async function getProduct(id) {
  const res = await axios.get(`/products/${id}`);
  return res.data;
}

export { getProduct, getProducts };
