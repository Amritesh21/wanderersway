import axios from "axios";

const BASE_URL = "/wanderersfamily";

export const logoutCall = async (setIsUserLoggedIn) => {
    return axios.post(`${BASE_URL}/logout`).then((res) => {
        if(res.data.status === 'success'){
            setIsUserLoggedIn(false);
        }
    });
}