import Head from "next/head";
import React from "react";
import axios from "axios";
import Cookies from "js-cookie";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Spinner,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import NotFound from "../../404";
import Router from "next/router";
import { Logo } from "../../../components/Logo";
import { NotificationsNav } from "../../../components/NotificationsNav";
import { NavSection } from "../../../components/NavSection";
import { NavLink } from "../../../components/NavLink";
import { RiDashboardLine, RiMoneyDollarBoxLine } from "react-icons/ri";
import { AiFillFile } from "react-icons/ai";

type User = {
  name: string;
  email: string;
  role: string;
  id: number;
};

const pembayaran = () => {
  const token = Cookies.get("token");
  const [user, setUser] = React.useState<User | null>(null);
  const [loading, setLoading] = React.useState(true);
  const { colorMode } = useColorMode();
  const [namaBank, setNamaBank] = React.useState("");
  const [pemilikRekening, setPemilikRekening] = React.useState("");
  const [nominal, setNominal] = React.useState("");
  const [foto, setFoto] = React.useState("");
  const [validation, setValidation] = React.useState<any>({});
  const [loadingSubmit, setLoadingSubmit] = React.useState(false);
  // const [pendaftaran, setPendaftaran] = React.useState("");

  React.useEffect(() => {
    if (token) {
      fetchData()
        .then(() => {
          // fetchPendaftaran();
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  const handleFileChange = (e: any) => {
    //define variable for get value image data
    const imageData = e.target.files[0];
    // //assign file to state "image"
    setFoto(imageData);
  };

  const pembayaranHandler = async (e: any) => {
    console.log(foto);
    e.preventDefault();
    setLoadingSubmit(true);

    const id = user?.id;

    await axios
      .patch(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/pendaftaran/${id}`, {
        nama_bank: namaBank,
        pemilik_rekening: pemilikRekening,
        nominal: nominal,
        foto: foto,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        setValidation(error.response.data);
        // console.log(error);
      })
      .finally(() => {
        setLoadingSubmit(false);
      });
  };

  const fetchData = async () => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    await axios
      .get(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/user`)
      .then((response) => {
        //set response user to state
        setUser(response.data);
      });
  };

  // const fetchPendaftaran = async () => {
  //   await axios
  //     .get(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/pendaftaran/${user?.id}`)
  //     .then((response) => {
  //       setPendaftaran(response.data);
  //     });
  // };

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

  const boxShadowColor = {
    light: "0px 8px 26px rgba(0, 0, 0, 0.2)",
    dark: "0px 8px 26px rgba(0, 0, 0, 0.7)",
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
                    <NavLink icon={RiDashboardLine} href="/dashboard/student">
                      Dashboard
                    </NavLink>
                    <NavLink
                      icon={RiMoneyDollarBoxLine}
                      href="/dashboard/student/pembayaran"
                      color="pink.400"
                    >
                      Pembayaran
                    </NavLink>
                  </NavSection>
                </Stack>
              </Box>

              <Box w="4xl">
                <Heading pb="10">Pembayaran</Heading>
                <Stack spacing={10}>
                  <Box
                    borderLeft="5px solid"
                    borderLeftColor={useColorModeValue("blue.400", "blue.700")}
                    p={["6", "4"]}
                    bg="gray.800"
                    borderRadius={3}
                  >
                    <Text fontSize="lg" fontWeight="bold">
                      Pembayaran
                    </Text>
                    <Text fontSize="md" fontWeight="light">
                      Sialahkan upload bukti bayar Anda di form berikut
                    </Text>
                  </Box>
                  <Box
                    borderTop="10px solid"
                    borderTopColor={useColorModeValue("blue.400", "blue.700")}
                    borderRadius={10}
                    boxShadow={boxShadowColor[colorMode]}
                  >
                    <Stack p={5} color={"white"}>
                      <Text fontSize="lg" fontWeight="bold">
                        Form Pembayaran
                      </Text>
                      <form onSubmit={pembayaranHandler}>
                        <Stack spacing={4}>
                          <Flex gap={8}>
                            <FormControl>
                              <FormLabel>Nama Bank</FormLabel>
                              <Select
                                borderColor="gray.600"
                                _hover={{ borderColor: "gray.600" }}
                                onChange={(event) =>
                                  setNamaBank(event.target.value)
                                }
                                placeholder="Pilih Bank"
                              >
                                <option value="option1">BANK MANDIRI</option>
                                <option value="option2">
                                  BANK CENTRAL ASIA
                                </option>
                                <option value="option3">
                                  BANK RAKYAT INDONESIA
                                </option>
                              </Select>
                              {validation.nama_bank && (
                                <Alert variant="left-accent" status="error">
                                  <AlertIcon />
                                  {validation.nama_bank[0]}
                                </Alert>
                              )}
                            </FormControl>
                            <FormControl>
                              <FormLabel>Nama Pemilik Rekening</FormLabel>
                              <Input
                                type="text"
                                borderColor="gray.600"
                                _hover={{ borderColor: "gray.600" }}
                                onChange={(event) =>
                                  setPemilikRekening(event.target.value)
                                }
                              />
                              {validation.pemilik_rekening && (
                                <Alert variant="left-accent" status="error">
                                  <AlertIcon />
                                  {validation.pemilik_rekening[0]}
                                </Alert>
                              )}
                            </FormControl>
                            <FormControl>
                              <FormLabel>Nominal</FormLabel>
                              <Input
                                type="text"
                                borderColor="gray.600"
                                _hover={{ borderColor: "gray.600" }}
                                onChange={(event) =>
                                  setNominal(event.target.value)
                                }
                              />
                              {validation.nominal && (
                                <Alert variant="left-accent" status="error">
                                  <AlertIcon />
                                  {validation.nominal[0]}
                                </Alert>
                              )}
                            </FormControl>
                          </Flex>
                          <FormControl>
                            <FormLabel htmlFor="writeUpFile">
                              Bukti Pembayaran
                            </FormLabel>
                            <InputGroup>
                              <InputLeftElement
                                pointerEvents="none"
                                children={<Icon as={AiFillFile} />}
                              />
                              <Input
                                placeholder={"Foto"}
                                type="file"
                                pt={1}
                                onChange={handleFileChange}
                              />
                              {validation.foto && (
                                <Alert variant="left-accent" status="error">
                                  <AlertIcon />
                                  {validation.foto[0]}
                                </Alert>
                              )}
                            </InputGroup>
                          </FormControl>
                          {loadingSubmit ? (
                            <Button
                              w={40}
                              bgColor={useColorModeValue(
                                "blue.400",
                                "blue.700"
                              )}
                              _hover={{
                                bgColor: useColorModeValue(
                                  "blue.400",
                                  "blue.500"
                                ),
                              }}
                              type="submit"
                              isLoading
                              loadingText="Uploading"
                            >
                              Upload
                            </Button>
                          ) : (
                            <Button
                              w={40}
                              bgColor={useColorModeValue(
                                "blue.400",
                                "blue.700"
                              )}
                              _hover={{
                                bgColor: useColorModeValue(
                                  "blue.400",
                                  "blue.500"
                                ),
                              }}
                              type="submit"
                            >
                              Upload
                            </Button>
                          )}
                        </Stack>
                      </form>
                    </Stack>
                  </Box>
                </Stack>
              </Box>
            </Flex>
          </Flex>
        </>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default pembayaran;
