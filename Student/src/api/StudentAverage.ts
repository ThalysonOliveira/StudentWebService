import axios from 'axios';

const StudentAverage = axios.create({
  baseURL: 'http://localhost:3333',
});

export default StudentAverage;
