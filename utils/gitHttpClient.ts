import axios from 'axios';

export default axios.create({
  headers: {
    Authorization: `${process.env.NEXT_PUBLIC_GITHUB_API_TOKEN}`,
  },
  baseURL: 'https://api.github.com/',
  withCredentials: true, // Dont know what this is doing
});
