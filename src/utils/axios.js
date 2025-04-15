import axiosConfig from "axios";

const axios = axiosConfig.create({ baseURL: "http://localhost:3001" });

export { axios };
