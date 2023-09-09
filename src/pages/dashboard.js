import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Heading,
  Spinner,
  Stat,
  StatGroup,
  StatLabel,
  StatNumber,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import { Radar } from "react-chartjs-2";

import { AppContainer } from "../components/app-container";
import { AttributeTable } from "../components/attribute-table";
import getDetails from "../services/details";
import { getItemDescription, getItemTitle } from "../services/generate";

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [details, setDetails] = useState({});
  const [contentObservability, setContentObservability] = useState({});
  const [offers, setOffers] = useState({});
  const [ratings, setRatings] = useState({});
  const [coScore, setCoScore] = useState(0);
  const [offScore, setOffScore] = useState(0);
  const [ratScore, setRatScore] = useState(0);

  const { id } = useParams();

  const getScore = (score) => {
    const [scored] = score.split("/");
    return parseInt(scored);
  };

  const prepareContentObservability = (details) => {
    if (details.listings && details.listings["content-observability"]) {
      const listings = details.listings["content-observability"];
      const score = listings["score"];
      setCoScore(getScore(score));
      setContentObservability(listings);
    }
  };

  const prepareOffers = (details) => {
    if (details.listings && details.listings["offering"]) {
      const listings = details.listings["offering"];
      const score = listings["score"];
      setOffScore(getScore(score));
      setOffers(listings);
    }
  };

  const prepareRatings = (details) => {
    if (details.listings && details.listings["ratings"]) {
      const listings = details.listings["ratings"];
      const score = listings["score"];
      setRatScore(getScore(score));
      setRatings(listings);
    }
  };

  const data = {
    labels: ["Content & Discoverability", "Offers", "Ratings"],
    datasets: [
      {
        label: "Listings",
        data: [coScore, offScore, ratScore],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  useEffect(() => {
    async function getPageDetails(id) {
      try {
        const details = await getDetails(id);
        setDetails(details);
        prepareContentObservability(details);
        prepareOffers(details);
        prepareRatings(details);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
    if (id) {
      getPageDetails(id);
    }
  }, [id]);

  const getStatMetricsColor = (prediction) => {
    if (prediction === "bad") {
      return "red.700";
    } else if (prediction === "good") {
      return "green.700";
    } else {
      return "gray.700";
    }
  };

  const getListingCount = (listing) => {
    if (listing && listing.attributes) {
      return listing.attributes.length;
    }
    return 0;
  };

  const getAttributes = (listing) => {
    if (listing && listing.attributes) {
      const attributes = listing.attributes.map((attribute) => ({
        name: attribute.name,
        value: attribute.value,
        issues: attribute.issues.map((issue) => issue.reason),
        generated: attribute.generated,
      }));
      return attributes;
    }
    return [];
  };

  const getPageDetails = async (id) => {
    try {
      const details = await getDetails(id);
      setDetails(details);
      prepareContentObservability(details);
      prepareOffers(details);
      prepareRatings(details);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const onGenerate = async (name, text) => {
    if (name === "description") {
      try {
        await getItemDescription(details.job_name, text);
        await getPageDetails(id);
      } catch (err) {
        console.error(err);
      }
    }

    if (name === "title") {
      try {
        await getItemTitle(details.job_name, text);
        await getPageDetails(id);
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <Box className="dashboard">
      {isLoading && (
        <VStack py={24}>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </VStack>
      )}

      {!isLoading && details.job_name && (
        <Flex direction="column" gap={2}>
          <Box>
            <AppContainer>
              <Flex></Flex>
              <Flex direction="row" py={6} justifyContent="space-between">
                <Flex direction="column" gap={4}>
                  <Flex direction="row" alignItems="center" gap={2}>
                    <Link to="/main/listings">
                      <AiOutlineArrowLeft />
                    </Link>
                    <Heading as="h2" fontSize="xl" textColor="blue.800">
                      {details.job_name}
                    </Heading>
                  </Flex>
                  <Flex direction="row" alignItems="flex-start" gap={1}>
                    <Box w="15%">
                      <Text
                        fontSize="sm"
                        fontWeight="medium"
                        textColor="gray.500"
                      >
                        Item page url:{" "}
                      </Text>
                    </Box>
                    <a href={`${details.item_page_url}`} target="_blank">
                      <Text
                        fontSize="sm"
                        textDecoration="underline"
                        textColor="blue.500"
                      >
                        {details.item_page_url}
                      </Text>
                    </a>
                  </Flex>
                  <StatGroup w="40%" gap={4}>
                    <Stat
                      borderWidth={1}
                      borderColor="gray.400"
                      p={2}
                      borderRadius="md"
                    >
                      <StatLabel fontSize="xs" textColor="gray.500">
                        Overall Score
                      </StatLabel>
                      <StatNumber fontSize="md" textColor="gray.600">
                        {details.overall_score}
                      </StatNumber>
                    </Stat>
                    <Stat
                      borderWidth={1}
                      borderColor="gray.400"
                      p={2}
                      borderRadius="md"
                    >
                      <StatLabel fontSize="xs" textColor="gray.500">
                        Metrics prediction
                      </StatLabel>
                      <StatNumber
                        fontSize="md"
                        textColor={getStatMetricsColor(
                          details.metrics_prediction
                        )}
                      >
                        {details.metrics_prediction}
                      </StatNumber>
                    </Stat>
                  </StatGroup>
                  <a
                    href={`http://34.100.231.252:9001/?item=${details.job_name}`}
                  >
                    Generate layout page
                  </a>
                </Flex>

                <Box w="250px" h="250px">
                  <Radar
                    data={data}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      scales: {
                        yAxes: [
                          {
                            ticks: {
                              beginAtZero: true,
                            },
                          },
                        ],
                      },
                    }}
                  />
                </Box>
              </Flex>
            </AppContainer>
          </Box>

          <AppContainer>
            <Tabs w="fit-content">
              <TabList>
                <Tab fontSize="sm">
                  Content & Discoverability (
                  {getListingCount(contentObservability)})
                </Tab>
                <Tab fontSize="sm">Offers ({getListingCount(offers)})</Tab>
                <Tab fontSize="sm">Ratings ({getListingCount(ratings)})</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <VStack alignItems="flex-start" gap={6}>
                    <Stat
                      p={3}
                      borderWidth={1}
                      borderColor="gray.400"
                      borderRadius="md"
                    >
                      <StatLabel fontSize="xs" textColor="gray.500">
                        Overall score
                      </StatLabel>
                      <StatNumber fontSize="md" textColor="gray.600">
                        {contentObservability["score"]}
                      </StatNumber>
                    </Stat>

                    <AttributeTable
                      onGenerate={onGenerate}
                      attributes={getAttributes(contentObservability)}
                    />
                  </VStack>
                </TabPanel>
                <TabPanel>
                  <VStack alignItems="flex-start" gap={6}>
                    <Stat
                      p={3}
                      borderWidth={1}
                      borderColor="gray.400"
                      borderRadius="md"
                    >
                      <StatLabel fontSize="xs" textColor="gray.500">
                        Overall score
                      </StatLabel>
                      <StatNumber fontSize="md" textColor="gray.600">
                        {offers["score"]}
                      </StatNumber>
                    </Stat>
                    <AttributeTable
                      format="pricing"
                      attributes={getAttributes(offers)}
                    />
                  </VStack>
                </TabPanel>
                <TabPanel>
                  <VStack alignItems="flex-start" gap={6}>
                    <Stat
                      p={3}
                      borderWidth={1}
                      borderColor="gray.400"
                      borderRadius="md"
                    >
                      <StatLabel fontSize="xs" textColor="gray.500">
                        Overall score
                      </StatLabel>
                      <StatNumber fontSize="md" textColor="gray.600">
                        {ratings["score"]}
                      </StatNumber>
                    </Stat>
                    <AttributeTable attributes={getAttributes(ratings)} />
                  </VStack>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </AppContainer>
        </Flex>
      )}
    </Box>
  );
}
