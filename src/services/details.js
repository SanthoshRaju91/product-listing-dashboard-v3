import axios from "axios";

export default async function getDetails(id) {
  const url = `http://localhost:8090/jobs/result/${id}`;
  const response = await axios.get(url);
  return response.data;
}
