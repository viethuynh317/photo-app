import axiosClient from "./axiosClient";


const infosApi = {
  getAllInfo() {
    const infoUri = '/PhotoApp'
    return axiosClient.get(infoUri);
  },
} 

export default infosApi;