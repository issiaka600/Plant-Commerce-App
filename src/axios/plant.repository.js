import { plantAxios } from "./axiosInstance"

export const getPlantList = ()=>{
    return plantAxios.get('/list')
}