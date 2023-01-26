import axios from "axios";

export default axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Accept: "application/vnd.github+json",
    Authorization: `Bearer ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`,
    //"X-GitHub-Api-Version": "2022-11-28",
  },
});
