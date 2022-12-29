import { useColorModeValue, Flex, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Nav from "./NavBar/Nav";
import Footer from "./Footer/Footer";

const Container = ({ children }: { children: any }) => {
  const router = useRouter();
  return (
    <>
      {console.log(router.asPath)}
      <Box
        h={8}
        bgColor={useColorModeValue("rgb(248, 250, 252)", "gray.900")}
      />
      <Nav />
      <Box
        h={8}
        bgColor={useColorModeValue("rgb(248, 250, 252)", "gray.900")}
      />
      <Flex
        as="main"
        justifyContent="center"
        flexDirection="column"
        bg={useColorModeValue("#ffffff", "#15161a")}
        color={useColorModeValue("#000000", "#ffffff")}
      >
        {children}
        <Footer />
      </Flex>
    </>
  );
};

export default Container;
