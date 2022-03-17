import axios from 'axios';
import React from 'react';

const BASE_URL = "http://localhost:8082/user";

class ApiInteractionClass {

    loginMethod = (userLogincred) => {
        return axios.post(`${BASE_URL}/login`,
        userLogincred    
        )
    }

    signUpMethod = (newUser) => {
        return axios.post(`${BASE_URL}/add`, newUser);
    }
}

export var ApiInteraction =  new ApiInteractionClass();
