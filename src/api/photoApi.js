import axiosClient from "./axiosClient";


const photoApi = {
  getAllInfo() {
    const infoUri = '/PhotoApp'
    return axiosClient.get(infoUri);
  },
} 

export default photoApi;