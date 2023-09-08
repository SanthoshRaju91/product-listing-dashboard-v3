import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
  LinkBox,
  Text,
  Spinner,
} from "@chakra-ui/react";
import moment from "moment";

import { AppContainer } from "../../components/app-container";
import getListings from "../../services/listings";

export default function Listings() {
  const [isLoading, setIsLoading] = useState(false);
  const [listings, setListings] = useState([]);

  useEffect(() => {
    async function getAllListings() {
      setIsLoading(true);
      try {
        const listings = await getListings();
        setListings(listings);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }

    getAllListings();
  }, []);

  const getStatusColor = (status) => {
    if (status === "Completed") {
      return "green";
    } else if (status === "Pending") {
      return "orange";
    } else if (status === "Failed") {
      return "red";
    } else {
      return "gray";
    }
  };

  const getFormattedDate = (date) => {
    return moment(date).format("MM/DD/YYYY HH:mm:ss");
  };

  return (
    <AppContainer>
      <Table
        variant="simple"
        borderRadius="md"
        borderWidth={1}
        borderColor="gray.200"
      >
        <Thead>
          <Tr>
            <Th fontSize="xs">JOB NAME</Th>
            <Th fontSize="xs">ITEM PAGE URL</Th>
            <Th fontSize="xs">TRIGGERED ON</Th>
            <Th fontSize="xs">STATUS</Th>
          </Tr>
        </Thead>
        <Tbody>
          {isLoading && <Spinner />}
          {!isLoading &&
            listings.length > 0 &&
            listings.map((listing, index) => (
              <Tr key={index}>
                <Td>
                  <LinkBox
                    fontSize="sm"
                    textColor="blue.500"
                    textDecoration="underline"
                  >
                    <Link to={`/dashboard/${listing.jobName}`}>
                      {listing.jobName}
                    </Link>
                  </LinkBox>
                </Td>
                <Td>
                  <LinkBox
                    fontSize="sm"
                    textColor="blue.500"
                    textDecoration="underline"
                  >
                    <a
                      target="_blank"
                      href="https://item.rakuten.co.jp/wakasugi/wakaba/?s-id=top_normal_browsehist&xuseflg_ichiba01=10000295"
                      rel="noreferrer"
                    >
                      {listing.itemUrl}
                    </a>
                  </LinkBox>
                </Td>
                <Td>
                  <Text fontSize="sm">
                    {getFormattedDate(listing.createdDate)}
                  </Text>
                </Td>
                <Td>
                  <Badge colorScheme={getStatusColor(listing.status)}>
                    {listing.status}
                  </Badge>
                </Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </AppContainer>
  );
}
