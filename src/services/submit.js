import axios from "axios";

export default async function submit(jobName, itemPageUrl) {
  const response = await axios.post(`http://localhost:8090/jobs/create`, {
    jobName,
    itemUrl: itemPageUrl,
  });
  return response.data;
}
