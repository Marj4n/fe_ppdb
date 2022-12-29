import React from "react";
import { HStack, useColorMode, Link as ChakraLink } from "@chakra-ui/react";
import { transparentize } from "@chakra-ui/theme-tools";
import Link from "next/link";
import ToggleTheme from "./ToggleTheme";

function DesktopNav(): JSX.Element {
  const { colorMode } = useColorMode();

  return (
    <HStack spacing={8} display={{ base: `none`, md: `flex` }}>
      <Link href="/">
        <ChakraLink
          color={colorMode === "light" ? `` : `white`}
          fontSize="md"
          position="relative"
          textTransform="capitalize"
          _after={{
            transition: `all 0.25s ease-in-out`,
            content: `''`,
            /* Fixes anti-aliasing issue in chrome that leaves one pixel' */
            outline: `1px solid transparent`,
            width: `0%`,
            height: `15%`,
            position: `absolute`,
            bottom: 1,
            left: 0,
            bg:
              colorMode === "light"
                ? transparentize(`blue.500`, 0.68)
                : transparentize(`blue.500`, 0.98),
            zIndex: -1,
          }}
          _hover={{
            _after: {
              width: `100%`,
            },
          }}
        >
          Beranda
        </ChakraLink>
      </Link>
      <Link href="#jurusan">
        <ChakraLink
          color={colorMode === "light" ? `` : `white`}
          fontSize="md"
          position="relative"
          textTransform="capitalize"
          _after={{
            transition: `all 0.25s ease-in-out`,
            content: `''`,
            /* Fixes anti-aliasing issue in chrome that leaves one pixel' */
            outline: `1px solid transparent`,
            width: `0%`,
            height: `15%`,
            position: `absolute`,
            bottom: 1,
            left: 0,
            bg:
              colorMode === "light"
                ? transparentize(`blue.500`, 0.68)
                : transparentize(`blue.500`, 0.8),
            zIndex: -1,
          }}
          _hover={{
            _after: {
              width: `100%`,
            },
          }}
        >
          Jurusan
        </ChakraLink>
      </Link>
      <Link href="#testimonial">
        <ChakraLink
          color={colorMode === "light" ? `` : `white`}
          fontSize="md"
          position="relative"
          textTransform="capitalize"
          _after={{
            transition: `all 0.25s ease-in-out`,
            content: `''`,
            /* Fixes anti-aliasing issue in chrome that leaves one pixel' */
            outline: `1px solid transparent`,
            width: `0%`,
            height: `15%`,
            position: `absolute`,
            bottom: 1,
            left: 0,
            bg:
              colorMode === "light"
                ? transparentize(`blue.500`, 0.68)
                : transparentize(`blue.500`, 0.8),
            zIndex: -1,
          }}
          _hover={{
            _after: {
              width: `100%`,
            },
          }}
        >
          Testimoni
        </ChakraLink>
      </Link>
      <Link href="#about">
        <ChakraLink
          color={colorMode === "light" ? `` : `white`}
          fontSize="md"
          position="relative"
          textTransform="capitalize"
          _after={{
            transition: `all 0.25s ease-in-out`,
            content: `''`,
            /* Fixes anti-aliasing issue in chrome that leaves one pixel' */
            outline: `1px solid transparent`,
            width: `0%`,
            height: `15%`,
            position: `absolute`,
            bottom: 1,
            left: 0,
            bg:
              colorMode === "light"
                ? transparentize(`blue.500`, 0.68)
                : transparentize(`blue.500`, 0.8),
            zIndex: -1,
          }}
          _hover={{
            _after: {
              width: `100%`,
            },
          }}
        >
          Tentang Kami
        </ChakraLink>
      </Link>
      <Link href="#contact">
        <ChakraLink
          color={colorMode === "light" ? `` : `white`}
          fontSize="md"
          position="relative"
          textTransform="capitalize"
          _after={{
            transition: `all 0.25s ease-in-out`,
            content: `''`,
            /* Fixes anti-aliasing issue in chrome that leaves one pixel' */
            outline: `1px solid transparent`,
            width: `0%`,
            height: `15%`,
            position: `absolute`,
            bottom: 1,
            left: 0,
            bg:
              colorMode === "light"
                ? transparentize(`blue.500`, 0.68)
                : transparentize(`blue.500`, 0.8),
            zIndex: -1,
          }}
          _hover={{
            _after: {
              width: `100%`,
            },
          }}
        >
          Hubungi Kami
        </ChakraLink>
      </Link>
      <Link href="/login">
        <ChakraLink
          color={colorMode === "light" ? `` : `white`}
          fontSize="md"
          position="relative"
          textTransform="capitalize"
          _after={{
            transition: `all 0.25s ease-in-out`,
            content: `''`,
            /* Fixes anti-aliasing issue in chrome that leaves one pixel' */
            outline: `1px solid transparent`,
            width: `0%`,
            height: `15%`,
            position: `absolute`,
            bottom: 1,
            left: 0,
            bg:
              colorMode === "light"
                ? transparentize(`blue.500`, 0.68)
                : transparentize(`blue.500`, 0.8),
            zIndex: -1,
          }}
          _hover={{
            _after: {
              width: `100%`,
            },
          }}
        >
          Login
        </ChakraLink>
      </Link>

      <HStack spacing={2}>
        <ToggleTheme />
      </HStack>
    </HStack>
  );
}

export default DesktopNav;
