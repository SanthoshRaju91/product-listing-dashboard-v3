"use client";

import {
  Box,
  Flex,
  Heading,
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
import { Link } from "react-router-dom";

import { AppContainer } from "../components/app-container";
import { AttributeTable } from "../components/attribute-table";

export default function Dashboard() {
  const getStatMetricsColor = () => {
    const score = 4;
    if (score > 3 && score <= 5) {
      return "green.700";
    } else if (score > 2 && score <= 3) {
      return "orange.700";
    } else {
      return "red.700";
    }
  };

  return (
    <Box className="dashboard">
      <Flex direction="column" gap={2} background="gray.100">
        <Box>
          <AppContainer>
            <Flex></Flex>
            <Flex direction="row" py={6}>
              <Flex direction="column" gap={4}>
                <Flex direction="row" alignItems="center" gap={2}>
                  <Link to="/main/listing">
                    <AiOutlineArrowLeft />
                  </Link>
                  <Heading as="h2" fontSize="xl" textColor="blue.800">
                    ZARA-CROFT
                  </Heading>
                </Flex>
                <Flex direction="row" alignItems="center" gap={1}>
                  <Text fontSize="sm" fontWeight="medium" textColor="gray.500">
                    Item page url:{" "}
                  </Text>
                  <Text
                    fontSize="sm"
                    textColor="blue.600"
                    textDecoration="underline"
                  >
                    https://item.rakuten.co.jp/wakasugi/wakaba/?s-id=top_normal_browsehist&xuseflg_ichiba01=10000295
                  </Text>
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
                      4 / 5
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
                    <StatNumber fontSize="md" textColor={getStatMetricsColor()}>
                      Good
                    </StatNumber>
                  </Stat>
                </StatGroup>
              </Flex>
            </Flex>
          </AppContainer>
        </Box>

        <AppContainer>
          <Tabs w="fit-content">
            <TabList>
              <Tab fontSize="sm">Content & Discoverability (7)</Tab>
              <Tab fontSize="sm">Offers (2)</Tab>
              <Tab fontSize="sm">Ratings (1)</Tab>
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
                      2.0
                    </StatNumber>
                  </Stat>

                  <AttributeTable
                    attributes={[
                      {
                        name: "Item Name",
                        value:
                          "【楽天市場】【40%OFFクーポンで6,480円 11日2時まで】パーティードレス 結婚式 ワンピース ドレス 二次会 フォーマルドレス 体型カバー フォーマル お呼ばれ 服 服装 ミセス 大きいサイズ 大人 上品 20代 30代 40代 春 夏 秋 冬 総レース 袖付き 韓国 冬 小さいサイズ 袖あり ロング丈：パーティードレス通販！PourVous",
                        issues: [],
                        score: "100%",
                      },
                      {
                        name: "Description",
                        value:
                          "【楽天市場】【40%OFFクーポンで6,480円 11日2時まで】パーティードレス 結婚式 ワンピース ドレス 二次会 フォーマルドレス 体型カバー フォーマル お呼ばれ 服 服装 ミセス 大きいサイズ 大人 上品 20代 30代 40代 春 夏 秋 冬 総レース 袖付き 韓国 冬 小さいサイズ 袖あり ロング丈：パーティードレス通販！PourVous",
                        issues: ["No valid", "No coverage"],
                        score: "75%",
                      },
                    ]}
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
                      2.0
                    </StatNumber>
                  </Stat>

                  <AttributeTable
                    attributes={[
                      {
                        name: "Item Name",
                        value:
                          "【楽天市場】【40%OFFクーポンで6,480円 11日2時まで】パーティードレス 結婚式 ワンピース ドレス 二次会 フォーマルドレス 体型カバー フォーマル お呼ばれ 服 服装 ミセス 大きいサイズ 大人 上品 20代 30代 40代 春 夏 秋 冬 総レース 袖付き 韓国 冬 小さいサイズ 袖あり ロング丈：パーティードレス通販！PourVous",
                        issues: [],
                        score: "100%",
                      },
                      {
                        name: "Description",
                        value:
                          "【楽天市場】【40%OFFクーポンで6,480円 11日2時まで】パーティードレス 結婚式 ワンピース ドレス 二次会 フォーマルドレス 体型カバー フォーマル お呼ばれ 服 服装 ミセス 大きいサイズ 大人 上品 20代 30代 40代 春 夏 秋 冬 総レース 袖付き 韓国 冬 小さいサイズ 袖あり ロング丈：パーティードレス通販！PourVous",
                        issues: ["No valid", "No coverage"],
                        score: "75%",
                      },
                    ]}
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
                      2.0
                    </StatNumber>
                  </Stat>

                  <AttributeTable
                    attributes={[
                      {
                        name: "Item Name",
                        value:
                          "【楽天市場】【40%OFFクーポンで6,480円 11日2時まで】パーティードレス 結婚式 ワンピース ドレス 二次会 フォーマルドレス 体型カバー フォーマル お呼ばれ 服 服装 ミセス 大きいサイズ 大人 上品 20代 30代 40代 春 夏 秋 冬 総レース 袖付き 韓国 冬 小さいサイズ 袖あり ロング丈：パーティードレス通販！PourVous",
                        issues: [],
                        score: "100%",
                      },
                      {
                        name: "Description",
                        value:
                          "【楽天市場】【40%OFFクーポンで6,480円 11日2時まで】パーティードレス 結婚式 ワンピース ドレス 二次会 フォーマルドレス 体型カバー フォーマル お呼ばれ 服 服装 ミセス 大きいサイズ 大人 上品 20代 30代 40代 春 夏 秋 冬 総レース 袖付き 韓国 冬 小さいサイズ 袖あり ロング丈：パーティードレス通販！PourVous",
                        issues: ["No valid", "No coverage"],
                        score: "75%",
                      },
                    ]}
                  />
                </VStack>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </AppContainer>
      </Flex>
    </Box>
  );
}
