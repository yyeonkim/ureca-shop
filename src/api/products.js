import { axios } from "@/utils/axios.js";

async function getProducts() {
  const res = await axios.get("/products");
  return res.data;
}

export { getProducts };
