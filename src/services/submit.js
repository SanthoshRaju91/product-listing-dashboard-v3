import axios from "axios";

export default async function submit(jobName, itemPageUrl) {
  const response = await axios.post(`http://localhost:3100/api/submit`, {
    jobName,
    itemPageUrl,
  });
  return response.data;
}
