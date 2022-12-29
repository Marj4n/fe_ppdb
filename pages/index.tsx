import { NextSeo } from "next-seo";
import { Box, Flex, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Container from "../components/Container";
import Testimonial from "../components/section/Testmonial";
import Jurusan from "../components/section/Jurusan";
import About from "../components/section/About";
import Contact from "../components/section/Contact";
import Hero from "../components/section/Hero";
import JurusanCard from "../components/JurusanCard";

const url = "https://benjamincarlson.io/";
const title = "PPDB SMK Wikrama Bogor";
const description =
  "PPDB Iya";

export default function Index() {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
        }}
      />
      <Container>
        <Hero />
        <Flex px={4} flexDir="column" minH="90vh">
          <Flex
            flexDirection="column"
            maxWidth="1000px"
            alignSelf={[null, "center"]}
          >
            <Jurusan />
            <Testimonial />
          </Flex>
          <About />
          <Contact />
        </Flex>
      </Container>
    </>
  );
}
