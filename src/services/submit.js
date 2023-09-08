import axios from "axios";

export default async function submit(jobName, itemPageUrl) {
  const url = "http://34.100.231.252:8080/jobs/create";
  const response = await axios.post(url, {
    jobName,
    itemUrl: itemPageUrl,
  });
  return response.data;
}
