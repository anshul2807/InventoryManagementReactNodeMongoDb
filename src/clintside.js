import axios from 'axios';
export function fetchReqGET1(URL,token){
    return axios.get(URL , { headers: {"Authorization" : `${token}`} });   
}
export function fetchReqGET2(URL){
    return axios.get(URL);
}
export function fetchReqPOST1(URL,data){
    return axios.post(URL,data);
}
export function fetchReqPOST2(URL,token){
    return axios.post(URL , { headers: {"Authorization" : `${token}`} });
}
export function fetchReqPOST3(URL,token,data){
    return axios.post(URL , data,{ headers: {"Authorization" : `${token}`} });
}
export function fetchReqPUT1(URL,token,data){
    return axios.put(URL , data,{ headers: {"Authorization" : `${token}`} });
}
export function fetchReqDELETE1(URL,token){
    return axios.delete(URL,{ headers: {"Authorization" : `${token}`} });
}