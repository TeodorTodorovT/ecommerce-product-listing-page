import axios from "axios";

const baseURL = "https://fakestoreapi.com/products/category"

const api = {
  getProducts: async (productType) => {
    const URL = `${baseURL}/${productType.toLowerCase()}`;
    return await axios
      .get(URL)
      .then((res) => res.data)
      .catch((err) => err);
  },
};
export default api;
