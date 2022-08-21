import axios from "axios"

const BASE_URL = "http://localhost:8080/wanderersfamily";

export const logInAPICall = async (loginPayload, setIsUserLoggedIn) => {
  axios.post(`${BASE_URL}/login`, loginPayload).then((resp) => {
    console.log(resp);
    if(resp.data.status === 'success'){
        setIsUserLoggedIn(true);
    }
  });
}

export const validateSession = (setIsUserLoggedIn) => {
  axios.get(`${BASE_URL}/validatesession`).then((resp) => {
    setIsUserLoggedIn(resp.data.issessionValid);
  })
}