import axios from 'axios';

const instance = axios.create({
  baseURL: "https://tinder-backend-pra.herokuapp.com",
});

export default instance;