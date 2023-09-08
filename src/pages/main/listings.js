import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Badge,
  LinkBox,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { AppContainer } from "../../components/app-container";

// async function getData() {
//   const res = await fetch("http://localhost:3100/api/product/listings");
//   const listings = await res.json();
//   return listings;
// }

export default function Listings() {
  return (
    <AppContainer>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>JOB NAME</Th>
              <Th>ITEM PAGE URL</Th>
              <Th>TRIGGERED ON</Th>
              <Th>STATUS</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>
                <LinkBox
                  fontSize="sm"
                  textColor="blue.500"
                  textDecoration="underline"
                >
                  <Link to="/dashboard/zara-croft">Zara-Croft</Link>
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
                    https://item.rakuten.co.jp/wakasugi/wakaba/?s-id=top_normal_browsehist&xuseflg_ichiba01=10000295
                  </a>
                </LinkBox>
              </Td>
              <Td>
                <Text fontSize="sm">20203/09/09 20:03</Text>
              </Td>
              <Td>
                <Badge colorScheme="green">GENERATED</Badge>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <LinkBox
                  fontSize="sm"
                  textColor="blue.500"
                  textDecoration="underline"
                >
                  <Link href={""}>Zara-Croft</Link>
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
                    https://item.rakuten.co.jp/wakasugi/wakaba/?s-id=top_normal_browsehist&xuseflg_ichiba01=10000295
                  </a>
                </LinkBox>
              </Td>
              <Td>
                <Text fontSize="sm">20203/09/09 20:03</Text>
              </Td>
              <Td>
                <Badge colorScheme="orange">ANALYZING</Badge>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <LinkBox
                  fontSize="sm"
                  textColor="blue.500"
                  textDecoration="underline"
                >
                  <Link href={""}>Zara-Croft</Link>
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
                    https://item.rakuten.co.jp/wakasugi/wakaba/?s-id=top_normal_browsehist&xuseflg_ichiba01=10000295
                  </a>
                </LinkBox>
              </Td>
              <Td>
                <Text fontSize="sm">20203/09/09 20:03</Text>
              </Td>
              <Td>
                <Badge colorScheme="orange">ANALYZING</Badge>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </AppContainer>
  );
}
