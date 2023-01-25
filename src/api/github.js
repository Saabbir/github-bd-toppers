import axios from "axios";

export default axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Accept: "application/vnd.github+json",
    Authorization: "Bearer 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",
    //"X-GitHub-Api-Version": "2022-11-28",
  },
});
