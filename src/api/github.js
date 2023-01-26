import axios from "axios";
console.log("saabbir: process.env.NODE_ENV", process.env.NODE_ENV);
console.log(
  "saabbir: process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN",
  process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
);
export default axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Accept: "application/vnd.github+json",
    Authorization: `Bearer ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`,
    //"X-GitHub-Api-Version": "2022-11-28",
  },
});
