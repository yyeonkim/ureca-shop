import { axios } from "@/utils/axios.js";

// GET /cart
async function getCart() {
  const res = await axios.get("/cart");
  return res.data;
}

// POST /cart
async function postCart(body) {
  const res = await axios.post("/cart", body);
  return res.data;
}

// PATCH /cart/{id}
async function patchCart({ id, ...body }) {
  const res = await axios.patch(`/cart/${id}`, body);
  return res.data;
}

// DELETE /cart/{id}
async function deleteCart(id) {
  const res = await axios.delete(`/cart/${id}`);
  return res.data;
}

// PUT /cart/{id}
async function putCart(body) {
  try {
    const res = await axios.put(`/cart/${body.id}`, body);
    return res.data;
  } catch (err) {
    console.error(err);
    if (err.status === 404) {
      return postCart(body);
    }
  }
}

export { deleteCart, getCart, patchCart, postCart, putCart };
