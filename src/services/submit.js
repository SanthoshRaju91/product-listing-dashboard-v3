import axios from "axios";

export default async function submit(jobName, itemPageUrl) {
  const url = "http://localhost:8090/jobs/create";
  const response = await axios.post(url, {
    jobName,
    itemUrl: itemPageUrl,
  });
  return response.data;
}
