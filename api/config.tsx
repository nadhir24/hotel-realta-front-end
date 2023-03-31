import axios from "axios"

// console.log("ini => ", process.env.URL_BACKEND);

export default axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    "Content-Type": "application/json",
  },
})
