import {
  Button,
  Flex,
  Box,
  useColorModeValue,
  Heading,
  Text,
  Link as ChakraLink,
  Image,
  Stack,
  Icon,
  useColorMode,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { GrBlockQuote } from "react-icons/gr";

export default function Hero() {
  const { colorMode } = useColorMode();
  const colorSecondary = {
    light: "gray.600",
    dark: "gray.400",
  };
  return (
    <>
      <Box bgColor={useColorModeValue("rgb(248, 250, 252)", "gray.900")}>
        <Stack minHeight="62vh" direction={{ base: "column", md: "row" }}>
          <Flex p={8} flex={1} align={"center"} justify={"center"}>
            <Stack spacing={6} w={"full"} maxW={"lg"}>
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <Heading
                  letterSpacing="tight"
                  mb={4}
                  as="h1"
                  size="xl"
                  fontWeight={700}
                >
                  PPDB TP 2023-2024
                  <br />
                  SMK Wikrama Bogor
                </Heading>
              </motion.div>
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.8 }}
              >
                <Text
                  fontSize="xl"
                  color={useColorModeValue("gray.600", "gray.500")}
                  mb={6}
                >
                  Ayo! segera daftarkan dirimu ke SMK Wikrama dengan cara klik{" "}
                  <strong>PENDAFTARAN PPDB</strong> dibawah ini!{" "}
                  <strong>
                    Ilmu yang Amaliah, Amal yang Ilmiah, Akhlakul Karimah.
                  </strong>
                </Text>
              </motion.div>
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 1.2 }}
              >
                <Flex flexDir={["column", "row", "row"]}>
                  <ChakraLink
                    _hover={{ textDecor: "none" }}
                    w={["100%", "100%", null]}
                    mr={[0, 2, 2]}
                    mb={[2, 0, 0]}
                  >
                    <Link href="/register">
                      <Button
                        w={["100%", "100%", "50%"]}
                        colorScheme="blue"
                        size="md"
                        boxShadow={useColorModeValue(
                          "0px 8px 26px rgba(0, 0, 0, 0.2)",
                          "0px 8px 26px rgba(0, 0, 0, 0.7)"
                        )}
                        _hover={{
                          transform: "translateY(-2px)",
                          opacity: 0.85,
                          bgColor: useColorModeValue("blue.400", "blue.500"),
                        }}
                      >
                        PENAFTARAN PPDB
                      </Button>
                    </Link>
                  </ChakraLink>
                </Flex>
              </motion.div>
            </Stack>
          </Flex>
          <Flex flex={1}>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.6 }}
            >
              <Image
                alt={"Gedung RPL"}
                objectFit={"cover"}
                src="image/gedung-rpl.png"
                h="full"
                w="full"
              />
            </motion.div>
          </Flex>
        </Stack>
      </Box>
      <Flex
        flexDirection="column"
        maxWidth="1000px"
        alignSelf={[null, "center"]}
      >
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 2 }}
        >
          <Box as="section">
            <Flex
              // boxShadow={boxShadowColor[colorMode]}
              flexDir={{ base: "column", sm: "column", lg: "row" }}
              gap={1.5}
            >
              <Flex
                bgColor={useColorModeValue("gray.100", "gray.900")}
                p={[5, 20, 50]}
                borderRadius={3}
                as="blockquote"
                borderLeft="5px solid"
                borderLeftColor={useColorModeValue("blue.400", "blue.700")}
                // w="50%"
              >
                <Icon
                  as={GrBlockQuote}
                  fontSize={40}
                  color={colorSecondary[colorMode]}
                  mr={4}
                />
                <Flex flexDir="column">
                  <Text fontSize="xl" fontWeight="bold" mb={2}>
                    MOTTO
                  </Text>
                  <Text
                    fontSize="lg"
                    fontStyle="italic"
                    color={colorSecondary[colorMode]}
                  >
                    Ilmu yang Amaliah, Amal yang Ilmiah, Akhlaqul Karimah
                  </Text>
                </Flex>
              </Flex>
              <Flex
                bgColor={useColorModeValue("gray.100", "gray.900")}
                p={[5, 20, 50]}
                borderRadius={3}
                as="blockquote"
                borderLeft="5px solid"
                borderLeftColor={useColorModeValue("blue.400", "blue.700")}
                // w="50%"
              >
                <Icon
                  as={GrBlockQuote}
                  fontSize={40}
                  color={colorSecondary[colorMode]}
                  mr={4}
                />
                <Flex flexDir="column">
                  <Text fontSize="xl" fontWeight="bold" mb={2}>
                    AFIRMASI
                  </Text>
                  <Text
                    fontSize="lg"
                    fontStyle="italic"
                    color={colorSecondary[colorMode]}
                  >
                    Padamu negeri - kami berjanji - lulus Wikrama siap membangun
                    negeri
                  </Text>
                </Flex>
              </Flex>
              <Flex
                bgColor={useColorModeValue("gray.100", "gray.900")}
                p={[5, 20, 50]}
                borderRadius={3}
                as="blockquote"
                borderLeft="5px solid"
                borderLeftColor={useColorModeValue("blue.400", "blue.700")}
                // w="50%"
              >
                <Icon
                  as={GrBlockQuote}
                  fontSize={40}
                  color={colorSecondary[colorMode]}
                  mr={4}
                />
                <Flex flexDir="column">
                  <Text fontSize="xl" fontWeight="bold" mb={2}>
                    ATITUDE
                  </Text>
                  <Text
                    fontSize="lg"
                    fontStyle="italic"
                    color={colorSecondary[colorMode]}
                  >
                    Aku ada lingkunganku bahagia
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Box>
        </motion.div>
      </Flex>
    </>
  );
}
