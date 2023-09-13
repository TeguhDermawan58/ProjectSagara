import axios from "axios";
import {  apiUrl } from "./url";

export type RegisterTypeModel = {
    name: string,
    email: string,
    password: string,
    // confirmPassword: string,
    // Add more fields as needed for registration
}

export const registerSubmit = (registrationModel: RegisterTypeModel) => {
    const promise = axios.post(`${apiUrl}/api/register`, registrationModel)
        .then((response) => response.data);
    return promise;
}

export type LoginTypeModel = {
    email: string,
    password: string,
}

export const loginSubmit = (e: React.FormEvent<HTMLFormElement>, loginModel: LoginTypeModel) => {
    e.preventDefault();
    const promise = axios.post(`${apiUrl}/api/login`, loginModel)
    .then((response)=>response.data);
    return promise;
}
export const checkToken = (token:string)=>{
    const promise = axios.get(`${apiUrl}/Auth/ValidateToken?token=${token}`);
    const dataPromise =promise.then((response)=>response.data)
    return dataPromise;
}
