"use client";

import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Flex, Box, Heading, Text, Tabs, TabList, Tab } from "@chakra-ui/react";

import { AppContainer } from "../components/app-container";

const GENERATE = "GENERATE";
const LISTING = "LISTING";

export default function Main() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [tabIndex, setTabIndex] = useState(() =>
    pathname === "/main/listings" ? 1 : 0
  );

  useEffect(() => {
    if (pathname === "/main/generate") {
      setTabIndex(0);
    }

    if (pathname === "/main/listings") {
      setTabIndex(1);
    }
  }, [pathname]);

  const onTab = (name) => {
    if (name === GENERATE) {
      navigate("/main/generate");
    }
    if (name === LISTING) {
      navigate("/main/listings");
    }
  };

  return (
    <Flex direction="column" gap="4">
      <Box className="hero-section" background="gray.50">
        <AppContainer>
          <Flex
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            py={2}
          >
            <Flex direction="column" gap="2">
              <Heading
                as="h2"
                fontSize="2xl"
                fontWeight="bold"
                textColor="blue.800"
              >
                Welcome User,
              </Heading>
              <Text fontSize="sm" textColor="blue.800">
                Product Listing Analytics (PLA) is a platform for analyzing the
                product listing attributes for a ideal product
              </Text>
            </Flex>
            <img
              src="/shop-cart.svg"
              alt="Shopping cart"
              width={160}
              height={160}
            />
          </Flex>
          <Tabs w="fit-content" defaultIndex={tabIndex}>
            <TabList>
              <Tab onClick={() => onTab(GENERATE)}>Generate listing</Tab>
              <Tab onClick={() => onTab(LISTING)}>View listing</Tab>
            </TabList>
          </Tabs>
        </AppContainer>
      </Box>
      <Box className="content-section" my={6}>
        <Outlet />
      </Box>
    </Flex>
  );
}
