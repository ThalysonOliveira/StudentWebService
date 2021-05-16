import axios from 'axios';

const StudentAverage = axios.create({
  baseURL: 'http://studentaverage:4000',
});

export default StudentAverage;
