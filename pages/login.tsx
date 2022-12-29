import React from "react";
import axios from "axios";
import Router from "next/router";
import Cookies from "js-cookie";
import {
  Alert,
  AlertIcon,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Link as ChakraLink,
  Spinner,
  Stack,
  Text,
  Center,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import Link from "next/link";
import Head from "next/head";

type User = {
  name: string;
  email: string;
  role: string;
};

const LoginPage = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [pageLoading, setPageLoading] = React.useState(true);
  const [validation, setValidation] = React.useState<any>([]);
  const [showPassword, setShowPassword] = React.useState(false);
  const [user, setUser] = React.useState<User | null>(null);
  const token = Cookies.get("token");

  const loginSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/login`, {
        email,
        password,
      })
      .then((response) => {
        const role = response.data.user.role;
        Cookies.set("token", response.data.token);
        role === "admin"
          ? Router.push("/dashboard/admin")
          : Router.push("/dashboard/student");
      })
      .catch((error) => {
        setValidation(error.response.data);
      })
      .finally(() => {
        setLoading(false);
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

  React.useEffect(() => {
    if (token) {
      fetchData()
        .then(() => {
          user?.role === "admin"
            ? Router.push("/dashboard/admin")
            : Router.push("/dashboard/student");
        })
        .finally(() => {
          setPageLoading(false);
        });
    } else {
      setPageLoading(false);
    }
  }, []);

  return (
    <>
      <Head>
        <title>PPDB | Login</title>
      </Head>
      {pageLoading ? (
        <Center h="100vh">
          <Spinner size="xl" />
        </Center>
      ) : (
        <form onSubmit={loginSubmit}>
          <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
            <Flex p={8} flex={1} align={"center"} justify={"center"}>
              <Stack spacing={4} w={"full"} maxW={"md"}>
                <Heading fontSize={"4xl"}>Login</Heading>
                <Text py={2}>Masuk ke Akun PPDB-mu</Text>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input
                    type="email"
                    id="email"
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
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                    />
                    <InputRightElement h={"full"}>
                      <Button
                        variant={"ghost"}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }
                      >
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  {validation.password && (
                    <Alert variant="left-accent" status="error">
                      <AlertIcon />
                      {validation.password[0]}
                    </Alert>
                  )}
                </FormControl>
                {validation.message && (
                  <Alert variant="left-accent" status="warning">
                    <AlertIcon />
                    {validation.message}
                  </Alert>
                )}
                <Stack spacing={6}>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                  >
                    <Text>
                      Belum punya akun?{" "}
                      <Link href="/register">
                        <ChakraLink color={"blue.500"}>daftar</ChakraLink>
                      </Link>
                    </Text>
                  </Stack>
                  {loading ? (
                    <Button
                      type="submit"
                      colorScheme={"blue"}
                      variant={"solid"}
                      isLoading
                      loadingText="Submitting"
                    >
                      Sign in
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      colorScheme={"blue"}
                      variant={"solid"}
                    >
                      Sign in
                    </Button>
                  )}
                </Stack>
              </Stack>
            </Flex>
            <Flex flex={1} h="100vh">
              <Image
                alt={"Login Image"}
                objectFit={"cover"}
                src={"image/form.jpg"}
                h="full"
                w="full"
              />
            </Flex>
          </Stack>
        </form>
      )}
    </>
  );
};

export default LoginPage;
