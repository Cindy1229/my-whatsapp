import axios from "axios";

const instance = axios.create({
  baseURL: "https://my-whatsapp-cindy.herokuapp.com/",
});
export default instance;
