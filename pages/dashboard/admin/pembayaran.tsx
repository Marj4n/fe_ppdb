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
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Stack,
  Table,
  TableCaption,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
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

interface Pembayaran {
  [x: string]: any;
  id: number;
  NISN: number;
  jenis_kelamin: string;
  nama: string;
  asal_sekolah: string;
  email: string;
  nomor_handphone: number;
  nomor_hp_ayah: number;
  nomor_hp_ibu: number;
  pilih_referensi: string;
  nama_bank: string;
  pemilik_rekening: string;
  nominal: string;
  foto: string;
  tervalidasi: string;
  created_at: string;
  updated_at: string;
}

const pembayaran = () => {
  const token = Cookies.get("token");
  const [user, setUser] = React.useState<User | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [loadingDetail, setLoadingDetail] = React.useState(false);
  const [loadingPendaftaran, setloadingPendaftaran] = React.useState(false);
  const [pembayaran, setPembayaran] = React.useState<Pembayaran | null>(null);
  const [pembayaranDetail, setPembayaranDetail] =
    React.useState<Pembayaran | null>(null);
  const [pendaftaranDetail, setpendaftaranDetail] =
    React.useState<Pembayaran | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  React.useEffect(() => {
    if (token) {
      fetchData().finally(() => {
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, []);

  const fetchPendaftaran = (id: number) => {
    setLoadingDetail(true);
    axios
      .get(`http://localhost:8000/api/pendaftaran/${id}`)
      .then((response) => {
        setpendaftaranDetail(response.data);
      })
      .finally(() => {
        onOpen();
        setLoadingDetail(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const onCloseModal = () => {
    setpendaftaranDetail(null);
    setPembayaranDetail(null);
    onClose();
  };

  const fetchPembayaran = (id: number) => {
    setloadingPendaftaran(true);
    axios
      .get(`http://localhost:8000/api/pendaftaran/${id}`)
      .then((response) => {
        setPembayaranDetail(response.data);
      })
      .finally(() => {
        onOpen();
        setloadingPendaftaran(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const fetchData = async () => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    axios
      .get(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/pendaftaran`)
      .then((response) => {
        // Set pembayaran data to state
        setPembayaran(response.data);
        console.log(response.data);
      });
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

  const handleTervalidasiDiterima = (id: number) => {
    axios
      .post(
        `${process.env.NEXT_PUBLIC_API_BACKEND}/pendaftaran/validasi/${id}`,
        {
          tervalidasi: "diterima",
          _method: "PATCH",
        }
      )
      .then((response) => {
        console.log(response);
      })
      .finally();
  };

  const handleTervalidasiDitolak = (id: number) => {
    axios.post(
      `${process.env.NEXT_PUBLIC_API_BACKEND}/pendaftaran/validasi/${id}`,
      {
        tervalidasi: "ditolak",
        _method: "PATCH",
      }
    );
  };

  return (
    <>
      <Head>
        <title>PPDB Dashboard | Admin</title>
      </Head>
      {loading ? (
        <Center h="100vh">
          <Spinner size="xl" />
        </Center>
      ) : user?.role === "admin" ? (
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
                    <NavLink icon={RiDashboardLine} href="/dashboard/admin">
                      Dashboard
                    </NavLink>
                    <NavLink
                      icon={RiMoneyDollarBoxLine}
                      href="/dashboard/admin/pembayaran"
                      color="pink.400"
                    >
                      Pembayaran
                    </NavLink>
                  </NavSection>
                </Stack>
              </Box>

              <Box w="4xl">
                <Heading pb="10">Verifikasi Pembayaran</Heading>
                <Table variant="simple">
                  <TableCaption>Jadi admin yang bener.</TableCaption>
                  <Thead>
                    <Tr>
                      <Th textAlign="center">No</Th>
                      <Th textAlign="center">Nomor Registrasi</Th>
                      <Th textAlign="center">Nama</Th>
                      <Th textAlign="center">Bukti Pembayaran</Th>
                      <Th textAlign="center">Detail Pendaftaran</Th>
                      <Th textAlign="center">Aksi</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {pembayaran &&
                      pembayaran.map((pembayaran: Pembayaran) => (
                        <>
                          <Tr key={pembayaran.id}>
                            <Td textAlign="center">{pembayaran.id}</Td>
                            <Td textAlign="center">{pembayaran.id}</Td>
                            <Td textAlign="center">{pembayaran.nama}</Td>
                            <Td textAlign="center">
                              {pembayaran.foto ? (
                                loadingPendaftaran ? (
                                  <Button
                                    variant="link"
                                    colorScheme="blue"
                                    onClick={() => {
                                      fetchPembayaran(pembayaran.id);
                                    }}
                                    isLoading
                                    loadingText="Loading"
                                  >
                                    Lihat
                                  </Button>
                                ) : (
                                  <Button
                                    variant="link"
                                    colorScheme="blue"
                                    onClick={() => {
                                      fetchPembayaran(pembayaran.id);
                                    }}
                                  >
                                    Lihat
                                  </Button>
                                )
                              ) : (
                                "Belum"
                              )}
                            </Td>
                            <Td textAlign="center">
                              {loadingDetail ? (
                                <Button
                                  variant="link"
                                  colorScheme="blue"
                                  onClick={() => {
                                    fetchPendaftaran(pembayaran.id);
                                  }}
                                  isLoading
                                  loadingText="Loading"
                                >
                                  Lihat
                                </Button>
                              ) : (
                                <Button
                                  variant="link"
                                  colorScheme="blue"
                                  onClick={() => {
                                    fetchPendaftaran(pembayaran.id);
                                  }}
                                >
                                  Lihat
                                </Button>
                              )}
                              <Modal
                                isOpen={isOpen}
                                onClose={onCloseModal}
                                size="xs"
                              >
                                <ModalOverlay />
                                <ModalContent>
                                  <ModalHeader>Detail Pendaftaran</ModalHeader>
                                  <ModalCloseButton />
                                  {pembayaranDetail ? (
                                    <ModalBody>
                                      <Stack spacing={5}>
                                        <Image src={pembayaranDetail?.foto} />
                                        <Text>
                                          Nama Bank:{" "}
                                          {pembayaranDetail?.nama_bank}
                                        </Text>
                                        <Text>
                                          Nama Pemilik Rekening:{" "}
                                          {pembayaranDetail?.pemilik_rekening}
                                        </Text>
                                        <Text>
                                          Nominal: {pembayaranDetail?.nominal}
                                        </Text>
                                      </Stack>
                                    </ModalBody>
                                  ) : (
                                    <ModalBody>
                                      <Stack spacing={5}>
                                        <Text>
                                          NISN: {pendaftaranDetail?.NISN}
                                        </Text>
                                        <Text>
                                          Nama Siswa: {pendaftaranDetail?.nama}
                                        </Text>
                                        <Text>
                                          Jenis Kelamin:{" "}
                                          {pendaftaranDetail?.jenis_kelamin}
                                        </Text>
                                        <Text>
                                          Asal Sekolah:{" "}
                                          {pendaftaranDetail?.asal_sekolah}
                                        </Text>
                                        <Text>
                                          Email: {pendaftaranDetail?.email}
                                        </Text>
                                        <Text>
                                          No HP:{" "}
                                          {pendaftaranDetail?.nomor_handphone}
                                        </Text>
                                        <Text>
                                          No HP Ayah:{" "}
                                          {pendaftaranDetail?.nomor_hp_ayah}
                                        </Text>
                                        <Text>
                                          No HP Ibu:{" "}
                                          {pendaftaranDetail?.nomor_hp_ibu}
                                        </Text>
                                      </Stack>
                                    </ModalBody>
                                  )}
                                  <ModalFooter>
                                    <Button
                                      colorScheme="blue"
                                      mr={3}
                                      onClick={onCloseModal}
                                    >
                                      Close
                                    </Button>
                                  </ModalFooter>
                                </ModalContent>
                              </Modal>
                            </Td>
                            <Td textAlign="center">
                              <Flex gap={2}>
                                {pembayaran.foto ? (
                                  <>
                                    <Button
                                      variant="solid"
                                      colorScheme="green"
                                      onClick={() => {
                                        handleTervalidasiDiterima(
                                          pembayaran.id
                                        );
                                      }}
                                    >
                                      Validasi
                                    </Button>
                                    <Button
                                      variant="solid"
                                      colorScheme="red"
                                      onClick={() => {
                                        handleTervalidasiDitolak(pembayaran.id);
                                      }}
                                    >
                                      Tolak
                                    </Button>
                                  </>
                                ) : (
                                  "Tidak ada bukti pembayaran"
                                )}
                              </Flex>
                            </Td>
                          </Tr>
                        </>
                      ))}
                  </Tbody>
                </Table>
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
