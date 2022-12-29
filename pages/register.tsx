import React from "react";
import axios from "axios";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Select,
  Spinner,
  Stack,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import Footer from "../components/Footer/Footer";
import { saveAs } from "file-saver";
import Head from "next/head";

const RegisterPage = () => {
  const toast = useToast();
  const [nisn, setNisn] = React.useState("");
  const [jenisKelamin, setJenisKelamin] = React.useState("");
  const [nama, setNama] = React.useState("");
  const [asalSekolah, setAsalSekolah] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [nomorHandphone, setNomorHandphone] = React.useState("");
  const [nomorHpAyah, setNomorHpAyah] = React.useState("");
  const [nomorHpIbu, setNomorHpIbu] = React.useState("");
  const [pilihReferensi, setPilihReferensi] = React.useState("");
  const [validation, setValidation] = React.useState<any>([]);
  const [loading, setLoading] = React.useState(false);
  const [pageLoading, setPageLoading] = React.useState(true);
  const [selectedOption, setSelectedOption] = React.useState("");

  const registerHandler = (e: any) => {
    e.preventDefault();
    setLoading(true);

    axios
      .post(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/pendaftaran`, {
        NISN: nisn,
        jenis_kelamin: jenisKelamin,
        nama: nama,
        asal_sekolah: selectedOption === "other" ? asalSekolah : selectedOption,
        email: email,
        nomor_handphone: nomorHandphone,
        nomor_hp_ayah: nomorHpAyah,
        nomor_hp_ibu: nomorHpIbu,
        pilih_referensi: pilihReferensi,
      })
      .then((response) => {
        setValidation("");
        setNisn("");
        setJenisKelamin("");
        setNama("");
        setAsalSekolah("");
        setEmail("");
        setNomorHandphone("");
        setNomorHpAyah("");
        setNomorHpIbu("");
        setPilihReferensi("");
        const pdfUrl = response.data;
        axios.get(pdfUrl, { responseType: "blob" }).then((response) => {
          const fileName = "formulir_pendaftaran.pdf";
          const blob = new Blob([response.data], { type: "application/pdf" });
          saveAs(blob, fileName);
        });
        toast({
          title: "Kamu Berhasil Mendaftar.",
          description:
            "Terimakasih Kamu mendaftar PPDB, silahkan akses akunya dengan cara login.",
          status: "success",
          duration: 9000,
          isClosable: true,
          position: "top",
        });
      })
      .catch((error) => {
        setValidation(error.response.data);
        // console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  React.useEffect(() => {
    //check token
    setPageLoading(false);
  }, []);
  return (
    <>
      <Head>
        <title>PPDB | Pendaftaran</title>
      </Head>
      {pageLoading ? (
        <Center h="100vh">
          <Spinner size="xl" />
        </Center>
      ) : (
        <form onSubmit={registerHandler}>
          <Flex
            minH={"100vh"}
            align={"center"}
            justify={"center"}
            bg={useColorModeValue("gray.50", "gray.800")}
          >
            <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
              <Stack align={"center"}>
                <Heading fontSize={"4xl"} textAlign={"center"}>
                  Form Pendaftaran PPDB
                </Heading>
                <Text fontSize={"lg"} color={"gray.600"}>
                  SMK Wikrama Bogor TP. 2023-2024
                </Text>
              </Stack>
              <Box
                rounded={"lg"}
                bg={useColorModeValue("white", "gray.700")}
                boxShadow={"lg"}
                p={8}
              >
                <Stack spacing={4}>
                  <HStack spacing={4}>
                    <FormControl
                      id="nisn"
                      // isRequired
                    >
                      <FormLabel>NISN</FormLabel>
                      <Input
                        value={nisn}
                        onChange={(event) => setNisn(event.target.value)}
                        type="number"
                        placeholder="Masukkan NISN"
                      />
                      {validation.NISN && (
                        <Alert variant="left-accent" status="error">
                          <AlertIcon />
                          {validation.NISN[0]}
                        </Alert>
                      )}
                    </FormControl>
                    <FormControl id="jenisKelamin">
                      <FormLabel>Jenis Kelamin</FormLabel>
                      <Select
                        value={jenisKelamin}
                        onChange={(event) =>
                          setJenisKelamin(event.target.value)
                        }
                        placeholder="Jenis Kelamin"
                      >
                        <option value="Perempuan">Perempuan</option>
                        <option value="Laki-laki">Laki-laki</option>
                      </Select>
                      {validation.jenis_kelamin && (
                        <Alert variant="left-accent" status="error">
                          <AlertIcon />
                          {validation.jenis_kelamin[0]}
                        </Alert>
                      )}
                    </FormControl>
                  </HStack>
                  <FormControl id="Nama">
                    <FormLabel>Nama</FormLabel>
                    <Input
                      value={nama}
                      onChange={(event) => setNama(event.target.value)}
                      type="text"
                      placeholder="Masukan Nama Lengkap"
                    />
                    {validation.nama && (
                      <Alert variant="left-accent" status="error">
                        <AlertIcon />
                        {validation.nama[0]}
                      </Alert>
                    )}
                  </FormControl>
                  <FormControl id="asalSekolah">
                    <FormLabel>Asal Sekolah</FormLabel>
                    <Select
                      placeholder="Pilih Asal Sekolah"
                      value={selectedOption}
                      onChange={(event) =>
                        setSelectedOption(event.target.value)
                      }
                    >
                      <option value="SMP Ngawi">SMP Ngawi</option>
                      <option value="SMP OPM">SMP OPM</option>
                      <option value="other">Lainnya</option>
                    </Select>
                    {selectedOption !== "other" && validation.asal_sekolah && (
                      <Alert variant="left-accent" status="error">
                        <AlertIcon />
                        {validation.asal_sekolah[0]}
                      </Alert>
                    )}
                  </FormControl>
                  {selectedOption === "other" && (
                    <FormControl id="asalSekolah">
                      <FormLabel>Nama Sekolah</FormLabel>
                      <Input
                        type="text"
                        placeholder="Masukan Asal Sekolah"
                        value={asalSekolah}
                        onChange={(event) => setAsalSekolah(event.target.value)}
                      ></Input>
                      {validation.asal_sekolah && (
                        <Alert variant="left-accent" status="error">
                          <AlertIcon />
                          {validation.asal_sekolah[0]}
                        </Alert>
                      )}
                    </FormControl>
                  )}

                  <FormControl id="email">
                    <FormLabel>Email</FormLabel>
                    <Input
                      placeholder="Masukan Email Aktif"
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                    {validation.email && (
                      <Alert variant="left-accent" status="error">
                        <AlertIcon />
                        {validation.email[0]}
                      </Alert>
                    )}
                  </FormControl>
                  <FormControl id="nomorHandphone">
                    <FormLabel>Nomor Handphone</FormLabel>
                    <Input
                      value={nomorHandphone}
                      onChange={(event) =>
                        setNomorHandphone(event.target.value)
                      }
                      placeholder="Contoh : 08--------"
                      type="number"
                    />
                    {validation.nomor_handphone && (
                      <Alert variant="left-accent" status="error">
                        <AlertIcon />
                        {validation.nomor_handphone[0]}
                      </Alert>
                    )}
                  </FormControl>
                  <HStack spacing={4}>
                    <Box>
                      <FormControl id="firstName">
                        <FormLabel>Nomor HP Ayah</FormLabel>
                        <Input
                          value={nomorHpAyah}
                          onChange={(event) =>
                            setNomorHpAyah(event.target.value)
                          }
                          placeholder="Contoh : 08--------"
                          type="number"
                        />
                        {validation.nomor_hp_ayah && (
                          <Alert variant="left-accent" status="error">
                            <AlertIcon />
                            {validation.nomor_hp_ayah[0]}
                          </Alert>
                        )}
                      </FormControl>
                    </Box>
                    <Box>
                      <FormControl id="lastName">
                        <FormLabel>Nomor HP Ibu</FormLabel>
                        <Input
                          value={nomorHpIbu}
                          onChange={(event) =>
                            setNomorHpIbu(event.target.value)
                          }
                          placeholder="Contoh : 08--------"
                          type="number"
                        />
                        {validation.nomor_hp_ibu && (
                          <Alert variant="left-accent" status="error">
                            <AlertIcon />
                            {validation.nomor_hp_ibu[0]}
                          </Alert>
                        )}
                      </FormControl>
                    </Box>
                  </HStack>
                  <FormControl id="email">
                    <FormLabel>Pilih Referensi</FormLabel>
                    <Select
                      value={pilihReferensi}
                      onChange={(event) =>
                        setPilihReferensi(event.target.value)
                      }
                      placeholder="Pilih Referensi"
                    >
                      <option value="pegawai">
                        Guru/Staf/Laboran/Pegawai Wikrama
                      </option>
                      <option value="siswa">Siswa SMK Wikrama</option>
                      <option value="alumni">Alumni SMK Wikrama</option>
                      <option value="guru_smp">Guru SMP</option>
                      <option value="calon_siswa">
                        Calon Siswa SMK Wikrama
                      </option>
                      <option value="sosial_media">Sosial Media</option>
                      <option value="referensi_langsung">
                        Referensi Langsung
                      </option>
                    </Select>
                    {validation.pilih_referensi && (
                      <Alert variant="left-accent" status="error">
                        <AlertIcon />
                        {validation.pilih_referensi[0]}
                      </Alert>
                    )}
                  </FormControl>
                  <Stack spacing={10} pt={2}>
                    {loading ? (
                      <Button
                        size="lg"
                        bg={"blue.400"}
                        color={"white"}
                        _hover={{
                          bg: "blue.500",
                        }}
                        type="submit"
                        isLoading
                        loadingText="Submitting"
                      >
                        Sign up
                      </Button>
                    ) : (
                      <Button
                        size="lg"
                        bg={"blue.400"}
                        color={"white"}
                        _hover={{
                          bg: "blue.500",
                        }}
                        type="submit"
                      >
                        Submit
                      </Button>
                    )}
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </Flex>
        </form>
      )}
      <Footer />
    </>
  );
};

export default RegisterPage;
