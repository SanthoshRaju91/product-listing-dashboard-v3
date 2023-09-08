import axios from "axios";

export default async function getListings(id) {
  const response = await axios.get(
    `http://localhost:8090/jobs/all`
  );
  return response.data;
}
