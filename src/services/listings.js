import axios from "axios";

export default async function getListings(id) {
  const url = "http://34.100.231.252:8080/jobs/all";
  const response = await axios.get(url);
  return response.data;
}
