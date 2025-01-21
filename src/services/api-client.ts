import axios from "../lib/axios";
import { AxiosRequestConfig } from "axios";

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config?: AxiosRequestConfig) => {
    return axios.get<T[]>(this.endpoint, config).then((res) => res.data);
  };

  get = (id: string) => {
    return axios.get<T>(`${this.endpoint}/${id}`).then((res) => res.data);
  };

  post = <R = T>(data: R) => {
    return axios.post<T>(this.endpoint, data).then((res) => res.data);
  };

  update = <R = T>(id: string, data: R) => {
    return axios
      .patch<T>(`${this.endpoint}/${id}`, data)
      .then((res) => res.data);
  };

  delete = (id: string) => {
    return axios.delete(`${this.endpoint}/${id}`).then((res) => res.data);
  };
}

export default APIClient;
