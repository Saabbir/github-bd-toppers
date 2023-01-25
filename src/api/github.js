import axios from "axios";

export default axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Accept: "application/vnd.github+json",
    Authorization: "Bearer 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",
    //"X-GitHub-Api-Version": "2022-11-28",
  },
});
