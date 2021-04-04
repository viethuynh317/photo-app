import axios from "axios";
import queryString from 'query-string'

const axiosClient = axios.create({
  baseURL: 'https://60657435b8fbbd0017566625.mockapi.io',
  headers: {
    'content-type': 'application/json'
  },
  paramsSerializer: params => queryString.stringify(params), 
});


axiosClient.interceptors.request.use(async (req) => {


  return req;
});


axiosClient.interceptors.response.use((res) => {
  if (res && res.data) return res.data;
  return res;
})

export default axiosClient;