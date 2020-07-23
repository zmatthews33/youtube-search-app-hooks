import axios from "axios";

const KEY = "AIzaSyDRXdhi9TpKkaW3BpY-6Kt3aZvgmsvesyk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: "5",
    key: KEY
  }
});
