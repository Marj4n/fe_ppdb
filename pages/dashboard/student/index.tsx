import Head from "next/head";
import React from "react";
import axios from "axios";
import Cookies from "js-cookie";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  SimpleGrid,
  Spinner,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import NotFound from "../../404";
import Router from "next/router";
import { Logo } from "../../../components/Logo";
import { NotificationsNav } from "../../../components/NotificationsNav";
import { NavSection } from "../../../components/NavSection";
import { NavLink } from "../../../components/NavLink";
import { RiDashboardLine, RiMoneyDollarBoxLine } from "react-icons/ri";

type User = {
  name: string;
  email: string;
  role: string;
};

const dashboardStudent = () => {
  const token = Cookies.get("token");
  const [user, setUser] = React.useState<User | null>(null);
  const [loading, setLoading] = React.useState(true);
  const now = new Date();
  const hours = now.getHours();
  let greeting = "";
  if (hours < 12) {
    greeting = "Pagi !";
  } else if (hours < 18) {
    greeting = "Siang !";
  } else {
    greeting = "Malam !";
  }

  React.useEffect(() => {
    if (token) {
      fetchData().finally(() => {
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, []);

  const fetchData = async () => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    await axios
      .get(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/user`)
      .then((response) => {
        //set response user to state
        setUser(response.data);
      });
  };

  const handleLogout = () => {
    setLoading(true);
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    axios.post(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/logout`).then(() => {
      Cookies.remove("token");
      setUser(null);
      Router.push("/");
      setLoading(false);
    });
  };

  return (
    <>
      <Head>
        <title>PPDB Dashboard | Student</title>
      </Head>
      {loading ? (
        <Center h="100vh">
          <Spinner size="xl" />
        </Center>
      ) : user?.role === "student" ? (
        <>
          <Flex direction="column" h="100vh">
            <Flex
              as="header"
              maxW={1480}
              w="100%"
              mx="auto"
              mt="4"
              px="6"
              h="20"
              align="center"
            >
              <Logo />

              <Flex align="center" ml="auto">
                <Button
                  onClick={handleLogout}
                  variant="outline"
                  colorScheme="pink"
                >
                  Logout
                </Button>
                <NotificationsNav />
                <Flex align="center">
                  <Box mr="4" textAlign="right">
                    <Text>{user.name}</Text>
                    <Text color="gray.300" fontSize="small">
                      {user.email}
                    </Text>
                  </Box>
                </Flex>
              </Flex>
            </Flex>

            <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
              <Box as="aside" w="64" mr="8">
                <Stack spacing="12" align="flex-start">
                  <NavSection title="DASHBOARD">
                    <NavLink
                      icon={RiDashboardLine}
                      href="/dashboard/student"
                      color="pink.400"
                    >
                      Dashboard
                    </NavLink>
                    <NavLink
                      icon={RiMoneyDollarBoxLine}
                      href="/dashboard/student/pembayaran"
                    >
                      Pembayaran
                    </NavLink>
                  </NavSection>
                </Stack>
              </Box>

              <SimpleGrid
                flex="1"
                gap="4"
                minChildWidth="320px"
                alignContent="flex-start"
              >
                <Box>
                  <Heading pb="10">Student</Heading>
                  <Box
                    borderLeft="5px solid"
                    borderLeftColor={useColorModeValue("blue.400", "blue.700")}
                    p={["6", "4"]}
                    bg="gray.800"
                    borderRadius={3}
                  >
                    <Text fontSize="lg" fontWeight="bold">
                      Hi {user.name}!
                    </Text>
                    <Text fontSize="md" fontWeight="light">
                      {greeting}, selamat datang
                    </Text>
                  </Box>
                </Box>
              </SimpleGrid>
            </Flex>
          </Flex>
        </>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default dashboardStudent;
