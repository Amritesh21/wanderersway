import axios from "axios";

const BASE_URL = "/wanderersfamily";

export const createUserAccount = (newuserdetails) => {
    return axios.post(`${BASE_URL}/signup`, newuserdetails).then((res) => console.log(res));
}