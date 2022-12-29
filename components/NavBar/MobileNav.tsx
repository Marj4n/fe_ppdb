import React from "react";
import {
  Box,
  Button,
  CloseButton,
  IconButton,
  useColorModeValue,
  useDisclosure,
  VStack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import ToggleTheme from "./ToggleTheme";

function MobileNav(): JSX.Element {
  const mobileNav = useDisclosure();
  return (
    <Box display={{ md: `none` }}>
      <ToggleTheme />

      <IconButton
        aria-label="toggle menu"
        icon={
          mobileNav.isOpen ? (
            <CloseButton style={{ zIndex: 20 }} aria-label="Close menu" />
          ) : (
            <AiOutlineMenu size="1.5em" />
          )
        }
        variant="ghost"
        onClick={mobileNav.isOpen ? mobileNav.onClose : mobileNav.onOpen}
      />

      <VStack
        pos="absolute"
        top={0}
        left={0}
        width="100vw"
        height="100vh"
        css={{
          backdropFilter: `saturate(180%) blur(5px)`,
          backgroundColor: useColorModeValue(
            `rgba(255, 255, 255, 0.9)`,
            `rgba(26, 32, 44, 0.9)`
          ),
        }}
        display={mobileNav.isOpen ? `flex` : `none`}
        flexDirection="column"
        spacing={3}
        rounded="sm"
        shadow="sm"
      >
        <Link href="/" passHref>
          <Button
            mt={16}
            onClick={mobileNav.onClose}
            as={ChakraLink}
            w="full"
            variant="ghost"
          >
            Beranda
          </Button>
        </Link>
        <Link href="#jurusan" passHref>
          <Button
            onClick={mobileNav.onClose}
            as={ChakraLink}
            w="full"
            variant="ghost"
          >
            Jurusan
          </Button>
        </Link>
        <Link href="#testimonial" passHref>
          <Button
            onClick={mobileNav.onClose}
            as={ChakraLink}
            w="full"
            variant="ghost"
          >
            Testimoni
          </Button>
        </Link>
        <Link href="#about" passHref>
          <Button
            onClick={mobileNav.onClose}
            as={ChakraLink}
            w="full"
            variant="ghost"
          >
            Tentang Kami
          </Button>
        </Link>
        <Link href="#contact" passHref>
          <Button
            onClick={mobileNav.onClose}
            as={ChakraLink}
            w="full"
            variant="ghost"
          >
            Hubungi Kami
          </Button>
        </Link>
        <Link href="/login" passHref>
          <Button
            onClick={mobileNav.onClose}
            as={ChakraLink}
            w="full"
            variant="ghost"
          >
            Login
          </Button>
        </Link>
      </VStack>
    </Box>
  );
}

export default MobileNav;
