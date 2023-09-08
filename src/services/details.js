import axios from "axios";

export default async function getDetails(id) {
  const response = await axios.get(
    `http://localhost:3100/api/product/listings/${id}`
  );
  return response.data;
}
