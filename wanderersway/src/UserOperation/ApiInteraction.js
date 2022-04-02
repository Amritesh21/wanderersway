import axios from 'axios';
import React from 'react';

const BASE_URL = "http://localhost:8082/user";
const APPOINT_URL = "http://localhost:8082/appointment";

class ApiInteractionClass {

    loginMethod = (userLogincred) => {
        return axios.post(`${BASE_URL}/login`,
        userLogincred    
        )
    }

    signUpMethod = (newUser) => {
        return axios.post(`${BASE_URL}/add`, newUser);
    }

    updateMethod = (userVariable) => {
        return axios.put(`${BASE_URL}/update`, userVariable);
    }

    addAppointment = (appointmentObj) => {
        return axios.post(`${APPOINT_URL}/add`, appointmentObj);
    }

    getAppointment = (email) => {
        return axios.get(`${APPOINT_URL}/get?email=${email}`);
    }
}

export var ApiInteraction =  new ApiInteractionClass();
