import axios from "axios";

export default axios.create({
    baseURL: "https://goodeatens.herokuapp.com/api/v1/restaurants"
})

