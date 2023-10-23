import axios from 'axios';
import {BASE_URL} from '../../environment';

const apiService = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
console.log(BASE_URL);

export default apiService;
