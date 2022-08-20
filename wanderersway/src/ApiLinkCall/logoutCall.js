import axios from "axios";

const BASE_URL = "http://localhost:8080/wanderersfamily";

export const logoutCall = () => {
    return axios.post(`${BASE_URL}/logout`).then((res) => {
        if(res.data.status === 'success'){
            console.log(res);
        }
    });
}