import axios from "axios";
import { PLANT_API_URL } from "../constants/constants";

export const plantAxios = axios.create(PLANT_API_URL)

