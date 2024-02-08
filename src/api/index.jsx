import axios from "axios";
import { Api_url } from "../constant";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

//  Login 
export const login = (users) => {
  return axios.post(`${Api_url}/auth/login`, users, config);
};


