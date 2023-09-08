import axios from "axios";

export default async function getListings(id) {
  const url = "http://localhost:8090/jobs/all";
  const response = await axios.get(url);
  return response.data;
}
