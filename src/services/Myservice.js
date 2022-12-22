import axios from "axios";
const apiURL="http://localhost:3001/api/v1/"; 
function postLogin(data){
    return axios.post(`${apiURL}auth`,data)
}
function postRegis(data){
    console.log(data)
    return axios.post(`${apiURL}users`,data)
}
export {postLogin,postRegis};