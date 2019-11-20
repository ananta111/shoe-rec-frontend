import axios from "axios"
const URL =  "http://localhost:3000/shoes";

export async function post(data){
    console.log("API endpoint hit");
    const res = await axios.post(URL, data);
}

export async function get(){
    return await axios.get(URL);
}

export async function getById(id){
    const url = URL + "/id"
    return await axios.get(url);
}

export async function getRecommendations(data){
    const url = "http://localhost:3000/recommendations/shoes"
    return await axios.get(url, { params: data });
}