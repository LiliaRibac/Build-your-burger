import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-b2644.firebaseio.com/'
});

export default instance;
