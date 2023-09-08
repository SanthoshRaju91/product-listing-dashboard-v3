import axios from "axios";

export default async function getListings(id) {
  const response = await axios.get(
    `http://localhost:3100/api/product/listings`
  );
  return response.data;
}
