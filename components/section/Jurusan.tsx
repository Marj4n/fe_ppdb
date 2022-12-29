import React, { useEffect, useState } from "react";
import JurusanCard from "../JurusanCard";
import { motion } from "framer-motion";
import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function getWindowDimensions() {
  const hasWindow = typeof window !== "undefined";
  const width = hasWindow ? window.innerWidth : null;
  const height = hasWindow ? window.innerHeight : null;
  return {
    width,
    height,
  };
}

// export function useWindowDimensions() {
//   const [windowDimensions, setWindowDimensions] = useState(
//     getWindowDimensions()
//   );

//   useEffect(() => {
//     function handleResize() {
//       setWindowDimensions(getWindowDimensions());
//     }

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return windowDimensions;
// }

const JurusanMobile = () => {
  return (
    <Flex>
      <Swiper slidesPerView={1.2}>
        <SwiperSlide>
          <JurusanCard
            title="Pengembangan Perangkat Lunak dan Gim"
            description=" Desktop Programming, Web Programming, Mobile Programming, Bussiness Analyst, Database Administration, Gimnya udah gak ClickBait."
            demoHref="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
            languageColor="#2b7489"
            language="PPLG"
            youtubeId="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
          />
        </SwiperSlide>
        <SwiperSlide>
          <JurusanCard
            title="Teknik Jaringan Komputer dan Telekomunikasi"
            description=" Kompetensi keahlian Teknik Komputer dan Jaringan sudah memiliki sertifikasi internasional seperti CNAP (Cisco Networking Academy Program) dan MCNA."
            demoHref="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
            languageColor="#f1e05a"
            language="TJKT"
            youtubeId="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
          />
        </SwiperSlide>
        <SwiperSlide>
          <JurusanCard
            title="Desain Komunikasi Visual"
            description="Lulusan dapat memiliki kesempatan kerja yang luas dibidang periklanan, production house, radio & televisi, studio foto, percetakan grafis, corporate brand identity, penerbit majalan/Koran."
            youtubeId="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
            languageColor="#00B4AB"
            language="DKV"
            demoHref="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
          />
        </SwiperSlide>
        <SwiperSlide>
          <JurusanCard
            title="Pemasaran"
            description="Kompetensi keahlian Bisnis Daring dan Pemasaran memiliki kompetensi yang mirip dengan program Multimedia dan Perkantoran. Lulusan program ini diharuskan mampu membuat foto produk, desain, copy writing."
            youtubeId="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
            languageColor="#9f9f9f"
            language="PMN"
            demoHref="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
          />
        </SwiperSlide>
        <SwiperSlide>
          <JurusanCard
            title="Manajemen Perkantoran Lembaga Bisnis"
            description="Kompetensi keahlian Otomatisasi dan Tata Kelola Perkantoran/Administrasi Perkantoran."
            youtubeId="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
            languageColor="#eb0202a4"
            language="MPLB"
            demoHref="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
          />
        </SwiperSlide>
        <SwiperSlide>
          <JurusanCard
            title="Tata Boga"
            description="Siswa jurusan Tata Boga mampu bekerja diberbagai bidang jasa boga seperti restoran, hotel, rumah sakit, katering sesuai dengan minat dan bakat yang telah dipelajari."
            youtubeId="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
            languageColor="#00b415"
            language="TBG"
            demoHref="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
          />
        </SwiperSlide>
        <SwiperSlide>
          <JurusanCard
            title="Perhotelan"
            description=" Siswa jurusan Perhotelan akan mampu bekerja di departemen yang ada di hotel dengan kompetensi yang mereka pelajari."
            youtubeId="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
            languageColor="#00B4AB"
            language="HTL"
            demoHref="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
          />
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
};

const JurusanDesktop = () => {
  return (
    <Box as="section" mt={10} mb={20}>
      <SimpleGrid minChildWidth="300px" spacing="40px">
        <JurusanCard
          title="Pengembangan Perangkat Lunak dan Gim"
          description=" Desktop Programming, Web Programming, Mobile Programming, Bussiness Analyst, Database Administration, Gimnya udah gak ClickBait."
          demoHref="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
          languageColor="#2b7489"
          language="PPLG"
          youtubeId="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
        />
        <JurusanCard
          title="Teknik Jaringan Komputer dan Telekomunikasi"
          description=" Kompetensi keahlian Teknik Komputer dan Jaringan sudah memiliki sertifikasi internasional seperti CNAP (Cisco Networking Academy Program) dan MCNA."
          demoHref="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
          languageColor="#f1e05a"
          language="TJKT"
          youtubeId="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
        />
        <JurusanCard
          title="Desain Komunikasi Visual"
          description="Lulusan dapat memiliki kesempatan kerja yang luas dibidang periklanan, production house, radio & televisi, studio foto, percetakan grafis, corporate brand identity, penerbit majalan/Koran."
          youtubeId="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
          languageColor="#00B4AB"
          language="DKV"
          demoHref="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
        />
        <JurusanCard
          title="Pemasaran"
          description="Kompetensi keahlian Bisnis Daring dan Pemasaran memiliki kompetensi yang mirip dengan program Multimedia dan Perkantoran. Lulusan program ini diharuskan mampu membuat foto produk, desain, copy writing."
          youtubeId="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
          languageColor="#9f9f9f"
          language="PMN"
          demoHref="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
        />
        <JurusanCard
          title="Manajemen Perkantoran Lembaga Bisnis"
          description="Kompetensi keahlian Otomatisasi dan Tata Kelola Perkantoran/Administrasi Perkantoran."
          youtubeId="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
          languageColor="#eb0202a4"
          language="MPLB"
          demoHref="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
        />
        <JurusanCard
          title="Tata Boga"
          description="Siswa jurusan Tata Boga mampu bekerja diberbagai bidang jasa boga seperti restoran, hotel, rumah sakit, katering sesuai dengan minat dan bakat yang telah dipelajari."
          youtubeId="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
          languageColor="#00b415"
          language="TBG"
          demoHref="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
        />
        <JurusanCard
          title="Perhotelan"
          description=" Siswa jurusan Perhotelan akan mampu bekerja di departemen yang ada di hotel dengan kompetensi yang mereka pelajari."
          youtubeId="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
          languageColor="#00B4AB"
          language="HTL"
          demoHref="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
        />
      </SimpleGrid>
    </Box>
  );
};

const Jurusan = () => {
  // const { height, width } = useWindowDimensions();
  return (
    <Box as="section" id="jurusan" pt={10}>
      <Stack spacing={4}>
        <Heading
          letterSpacing="tight"
          mt={6}
          size="lg"
          fontWeight={700}
          as="h2"
          mb={4}
        >
          Jurusan 📚
        </Heading>
        {/* {width >= 500 ? <JurusanDesktop /> : <JurusanMobile />} */}
        <JurusanDesktop />
      </Stack>
    </Box>
  );
};

export default Jurusan;
