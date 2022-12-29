import {
  Box,
  GridItem,
  Heading,
  Image,
  useColorMode,
  useColorModeValue,
  Grid,
  Flex,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const About = () => {
  const { colorMode } = useColorMode();

  const colorSecondary = {
    light: "gray.600",
    dark: "gray.400",
  };

  const boxShadowColor = {
    light: "0px 8px 26px rgba(0, 0, 0, 0.2)",
    dark: "0px 8px 26px rgba(0, 0, 0, 0.7)",
  };

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 2 }}
    >
      <Box as="section" id="about" pt={20}>
        <Grid
          w="full"
          templateRows={{ base: "repeat(1, 1fr)", lg: "repeat(1, 1fr)" }}
          templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
          gap={2}
        >
          <GridItem
            rowSpan={{ base: 2, md: 1, lg: 2 }}
            colSpan={{ base: 2, md: 2, lg: 2 }}
          >
            <Image src="image/Gedung.jpg" h="full" w="full" objectFit="cover" />
          </GridItem>
          <GridItem
            colSpan={{ base: 1, md: 1, lg: 1 }}
            rowSpan={{ base: 1, md: 1, lg: 1 }}
          >
            <iframe
              height="100%"
              width="100%"
              src="https://www.youtube.com/embed/_KYS5MT48tM"
              allowFullScreen={false}
            />
          </GridItem>
          <GridItem
            colSpan={{ base: 1, md: 1, lg: 1 }}
            bgColor={useColorModeValue("gray.100", "gray.900")}
            boxShadow={boxShadowColor[colorMode]}
          >
            <Flex flexDir="column" p={[5, 20, 50]}>
              <Text fontSize="xl" fontWeight="bold">
                Pembelajaran Tatap Muka Terbatas
              </Text>
              <Text
                fontSize={{ base: "md", lg: "lg" }}
                fontStyle="italic"
                color={colorSecondary[colorMode]}
              >
                SMK Wikrama selalu menerapkan protokol kesehatan dengan ketat,
                jadi kamu gak perlu khawatir lagi !
              </Text>
            </Flex>
          </GridItem>
          <GridItem
            colSpan={{ base: 1, md: 1, lg: 1 }}
            bgColor={useColorModeValue("gray.100", "gray.900")}
            boxShadow={boxShadowColor[colorMode]}
          >
            <Flex flexDir="column" p={[5, 20, 50]}>
              <Text fontSize="xl" fontWeight="bold">
                SMK Unggul dan Berprestasi Nasional
              </Text>
              <Text
                fontSize={{ base: "md", lg: "lg" }}
                fontStyle="italic"
                color={colorSecondary[colorMode]}
              >
                SMK Wikrama Bogor Satu dari 20 SMK Penerima Penghargaan "SMK
                Unggul dan Berprestasi" di Indonesia dari KEMENDIKBUD
              </Text>
            </Flex>
          </GridItem>
          <GridItem
            colSpan={{ base: 1, md: 1, lg: 1 }}
            rowSpan={{ base: 1, md: 1, lg: 1 }}
          >
            <iframe
              height="100%"
              width="100%"
              src="https://www.youtube.com/embed/_V8ZWxAcGY4"
              allowFullScreen={false}
            />
          </GridItem>
        </Grid>
      </Box>
    </motion.div>
  );
};

export default About;
