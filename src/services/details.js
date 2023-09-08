import axios from "axios";

export default async function getDetails(id) {
  const response = await axios.get(
    `http://localhost:8090/jobs/result/${id}`
  );
  return response.data;
}
