import axios from "axios";

const baseURL = "https://api.escuelajs.co/api/v1/categories"

const api = {
  getProducts: async (productType) => {
    const URL = `${baseURL}/${productType}/products`;
    return await axios
      .get(URL)
      .then((res) => res)
      .catch((err) => err);
  },
};
export default api;
