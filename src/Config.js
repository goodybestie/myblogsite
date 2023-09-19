import axios from "axios";
axios.defaults.baseURL="https://clarkifre.pythonanywhere.com"
axios.defaults.withCredentials = false

export default function setToken(token){
    if(token){
        // console.log(token)
        axios.defaults.headers.common.Authorization = token?  `Bearer ${token}` : "";
    // axios.defaults.headers.common.token= token ? `${token}`:''
}}

