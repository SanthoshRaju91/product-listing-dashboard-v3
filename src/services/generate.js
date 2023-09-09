import axios from "axios";

export async function getItemTitle(jobName, text) {
  const url = `http://34.100.231.252:8080/generate/item/${jobName}`;
  const response = await axios.post(url, {
    text,
  });
  return response.data;
}

export async function getItemDescription(jobName, text) {
  const url = `http://34.100.231.252:8080/generate/description/${jobName}`;
  const response = await axios.post(url, {
    text,
  });
  return response.data;
}
