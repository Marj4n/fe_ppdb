import {
  Heading,
  Text,
  Flex,
  Box,
  Wrap,
  WrapItem,
  VStack,
  Button,
  IconButton,
  HStack,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Input,
  Textarea,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";
import { motion } from "framer-motion";
import { AiOutlineSend } from "react-icons/ai";
import Link from "next/link";

const Contact = () => {
  const { colorMode } = useColorMode();

  const boxShadowColor = {
    light: "0px 8px 26px rgba(0, 0, 0, 0.2)",
    dark: "0px 8px 26px rgba(0, 0, 0, 0.7)",
  };
  return (
    <Flex
      flexDirection="column"
      maxWidth="1000px"
      alignSelf={"center"}
      id="contact"
    >
      <Box
        p={10}
        my={20}
        bg={useColorModeValue(`rgb(248, 250, 252)`, `gray.900`)}
        borderRadius={10}
        boxShadow={boxShadowColor[colorMode]}
      >
        <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
          <WrapItem>
            <Box>
              <Heading>Hubungi Kami</Heading>
              <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                Kontak Pendaftaran
              </Text>
              <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                <VStack pl={0} spacing={3} alignItems="flex-start">
                  <Link href="https://wa.me/6281909242411">
                    <Button
                      size="md"
                      height="48px"
                      variant="ghost"
                      color={useColorModeValue(
                        `gray.900`,
                        `rgb(248, 250, 252)`
                      )}
                      leftIcon={<MdPhone color="#1970F1" size="20px" />}
                    >
                      +62-8190-9242-411
                    </Button>
                  </Link>
                  <Link href="mailto:prohumasi@smkwikrama.net">
                    <Button
                      size="md"
                      height="48px"
                      variant="ghost"
                      color={useColorModeValue(
                        `gray.900`,
                        `rgb(248, 250, 252)`
                      )}
                      leftIcon={<MdEmail color="#1970F1" size="20px" />}
                    >
                      prohumasi@smkwikrama.net
                    </Button>
                  </Link>
                  <Link href="https://goo.gl/maps/1psNK9e9WKZsd9Cs7">
                    <Button
                      size="md"
                      height="48px"
                      variant="ghost"
                      color={useColorModeValue(
                        `gray.900`,
                        `rgb(248, 250, 252)`
                      )}
                      leftIcon={<MdLocationOn color="#1970F1" size="20px" />}
                    >
                      Jl. Raya Wangun No.21, RT.01/RW.06
                    </Button>
                  </Link>
                </VStack>
              </Box>
              <Link href="/register">
                <Button
                  w={["100%", "100%", "50%"]}
                  color="white"
                  _hover={{
                    transform: "translateY(-2px)",
                    bgColor: useColorModeValue("blue.400", "blue.500"),
                  }}
                  bg="#0D74FF"
                  size="md"
                  boxShadow={useColorModeValue(
                    "8px 8px 26px rgba(0, 0, 0, 0.2)",
                    "8px 8px 26px rgba(0, 0, 0, 0.7)"
                  )}
                >
                  Daftar Sekarang
                </Button>
              </Link>
            </Box>
          </WrapItem>
          <WrapItem>
            <Box
              bg={useColorModeValue(`blue.100`, `rgb(248, 250, 252)`)}
              borderRadius="lg"
              width="80"
            >
              <Box m={8} color={useColorModeValue(`black`, `gray.900`)}>
                <VStack spacing={5}>
                  <FormControl id="name">
                    <FormLabel>Nama</FormLabel>
                    <InputGroup
                      borderColor={useColorModeValue(`gray.600`, `gray.400`)}
                    >
                      <InputLeftElement
                        pointerEvents="none"
                        children={<BsPerson color="gray.800" />}
                      />
                      <Input
                        _placeholder={{ opacity: 0.6, color: "inherit" }}
                        placeholder="nama"
                        type="text"
                        size="md"
                      />
                    </InputGroup>
                  </FormControl>
                  <FormControl id="name">
                    <FormLabel>Mail</FormLabel>
                    <InputGroup
                      borderColor={useColorModeValue(`gray.600`, `gray.400`)}
                    >
                      <InputLeftElement
                        pointerEvents="none"
                        children={<MdOutlineEmail color="gray.800" />}
                      />
                      <Input
                        placeholder="mail"
                        _placeholder={{ opacity: 0.6, color: "inherit" }}
                        type="text"
                        size="md"
                      />
                    </InputGroup>
                  </FormControl>
                  <FormControl id="name">
                    <FormLabel>Message</FormLabel>
                    <Textarea
                      borderColor={useColorModeValue(`gray.600`, `gray.400`)}
                      _hover={{
                        borderRadius: "gray.300",
                      }}
                      placeholder="message"
                      _placeholder={{ opacity: 0.6, color: "inherit" }}
                    />
                  </FormControl>
                  <FormControl id="name" float="right">
                    <Button
                      rightIcon={<AiOutlineSend />}
                      variant="solid"
                      bg="#0D74FF"
                      color="white"
                      _hover={{
                        transform: "translateY(-2px)",
                        bgColor: useColorModeValue("blue.400", "blue.500"),
                      }}
                    >
                      Send Message
                    </Button>
                  </FormControl>
                </VStack>
              </Box>
            </Box>
          </WrapItem>
        </Wrap>
      </Box>
    </Flex>
  );
};

export default Contact;
