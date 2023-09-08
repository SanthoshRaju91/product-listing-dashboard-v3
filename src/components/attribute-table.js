import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Heading,
  Flex,
  Text,
  Button,
  Icon,
} from "@chakra-ui/react";
import { AiOutlineCheckCircle } from "react-icons/ai";

import { IssuesContainer } from "./issue-container";

export function AttributeTable({ attributes }) {
  return (
    <Table
      background="white"
      borderRadius="md"
      variant="simple"
      size="md"
      overflow={"scroll"}
    >
      <Thead>
        <Tr>
          <Th fontSize="xs">ATTRIBUTE</Th>
          <Th fontSize="xs">ISSUES</Th>
          <Th fontSize="xs">SCORE</Th>
          <Th fontSize="xs">ACTION</Th>
        </Tr>
      </Thead>
      <Tbody>
        {attributes.map((attribute, index) => (
          <Tr key={index}>
            <Td>
              <Flex direction="column" gap={2}>
                <Heading fontSize="sm" fontWeight="medium" textColor="gray.800">
                  {attribute.name}
                </Heading>
                <Text
                  fontSize="sm"
                  fontWeight="normal"
                  textColor="gray.700"
                  overflowWrap="normal"
                >
                  {attribute.value}
                </Text>
              </Flex>
            </Td>
            <Td>
              {attribute.issues.length > 0 ? (
                <IssuesContainer issues={attribute.issues} />
              ) : (
                <Flex direction="row" alignItems="center" gap={2}>
                  <Icon as={AiOutlineCheckCircle} w="4" h="4" />
                  <Text fontSize="sm" textColor="gray.700">
                    No Issues
                  </Text>
                </Flex>
              )}
            </Td>
            <Td>
              <Text fontSize="sm" textColor="gray.700">
                {attribute.score}
              </Text>
            </Td>
            <Td>
              {attribute.issues.length > 0 && (
                <Button colorScheme="blue" size="sm">
                  Generate using AI
                </Button>
              )}
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}
