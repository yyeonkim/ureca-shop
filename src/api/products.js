import { axios } from "@/utils/axios.js";

// GET /products
async function getProducts({ params }) {
  const res = await axios.get("/products", { params });
  return res.data;
}

// GET /products/{id}
async function getProduct(id) {
  try {
    const res = await axios.get(`/products/${id}`);
    return res.data;
  } catch (err) {
    console.error("GET product:", err);
    return null;
  }
}

export { getProduct, getProducts };
