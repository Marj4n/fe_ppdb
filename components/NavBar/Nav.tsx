import React from "react";
import {
  Flex,
  chakra,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";

import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

function Nav(): JSX.Element {
  return (
    <chakra.header
      width="full"
      position="fixed"
      top={0}
      left={0}
      zIndex={10}
      bg={useColorModeValue(
        `rgba(248, 250, 252, 0.8)`,
        `rgba(23, 25, 35, 0.8)`
      )}
      sx={{ backdropFilter: `saturate(180%) blur(5px)` }}
    >
      <chakra.nav mx="auto" p={3}>
        <Flex
          margin="auto"
          justifyContent="space-between"
          alignContent="center"
          maxW="7xl"
          width="full"
        >
          <Image h={10} w={10} src="image/wikrama.png" />
          <MobileNav />
          <DesktopNav />
        </Flex>
      </chakra.nav>
    </chakra.header>
  );
}

export default Nav;
