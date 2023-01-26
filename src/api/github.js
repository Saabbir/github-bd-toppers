import axios from "axios";

export default axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Accept: "application/vnd.github+json",
    Authorization: "Bearer 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",
    //"X-GitHub-Api-Version": "2022-11-28",
  },
});
