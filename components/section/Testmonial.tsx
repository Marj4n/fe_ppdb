import React, { useState } from "react";
import { DeleteIcon, Search2Icon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  useToast,
  Input,
  Stack,
  InputGroup,
  Button,
  useColorMode,
  Text,
  Heading,
  InputRightElement,
  Flex,
  IconButton,
  Tooltip,
  InputLeftElement,
  useColorModeValue,
  Divider,
  Box,
  Icon,
  Link,
} from "@chakra-ui/react";
import { AiFillEdit, AiOutlineSend } from "react-icons/ai";
import { motion } from "framer-motion";
// import { useWindowDimensions } from "./Jurusan";

const Testimonial = () => {
  const toast = useToast();
  const { colorMode } = useColorMode();

  const colorSecondary = {
    light: "gray.600",
    dark: "gray.400",
  };

  const borderColor = {
    light: "gray.200",
    dark: "gray.600",
  };

  const colorSmall = {
    light: "gray.400",
    dark: "gray.600",
  };

  const myTodos = [
    {
      title:
        "Maju Terus Wikrama, dengan sekolah di Wikrama saya dibekali ilmu yg sangat bermanfaat dan akhlakul karimah bisa langsung bisa bersaing ke dunia kerja di era modern ini.",
      name: "Akhmad Munito",
      year: 2000,
      jurusan: "Administrasi Perkantoran (APK)",
    },
    {
      title:
        "Menerapkan sistem pembelajaran yang baik, efektif dan berbasis TI yang sangat memudahkan siswa.",
      name: "Kamaludin",
      year: 2016,
      jurusan: "Rekayasa Perangkat Lunak (RPL)",
    },
    {
      title:
        "SMK Wikrama bukan hanya menjadikan siswanya untuk masuk ke dunia kerja, melainkan melebihi dari apa yang dibutuhkan di dunia kerja pada umumnya.",
      name: "Lutfi Hakim",
      year: 2011,
      jurusan: "Rekayasa Perangkat Lunak (RPL)",
    },
    {
      title: "Anda dapat berinteraksi dengan Testimoni ini.",
    },
  ];

  const [todos, setTodos] = useState(myTodos);
  const [input, setInput] = useState("");
  // const { height, width } = useWindowDimensions();

  const removeTodo = (todo: any) => {
    setTodos(todos.filter((t) => t !== todo));
  };

  const toggleCompleted = (todo: { completed: any; title?: string }) => {
    todo.completed = !todo.completed;
    setTodos([...todos]);
  };

  const addTodo = (input: any) => {
    setTodos(
      todos.concat({
        title: input,
      })
    );
    setInput("");
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      if (input == "")
        toast({
          title: "Whoops! Ada error!",
          description: "Input tidak bisa kosong!",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      else {
        addTodo(input);
      }
    }
  };

  return (
    <Flex flexDirection="column" maxWidth="1000px" alignSelf={[null, "center"]}>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 2 }}
      >
        <Box id="testimonial" as="section" w="100%" pt={20}>
          <Stack spacing={4} w="100%">
            <Heading letterSpacing="tight" size="lg" fontWeight={700} as="h2">
              Testimoni 📝
            </Heading>
            <Text color={colorSecondary[colorMode]}>
              Testimoni Alumni SMK Wikrama yang telah bekerja di Industri,
              Instansi dan Dunia Usaha.
            </Text>
            <InputGroup size="md" mt={4} borderColor={borderColor[colorMode]}>
              <InputLeftElement
                pointerEvents="none"
                children={
                  <AiFillEdit
                    color={useColorModeValue("gray.500", "gray.600")}
                  />
                }
              />
              <Input
                aria-label="Masukan Testimoni!"
                placeholder="Sekolah ini sangat Modern - Mamat"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <InputRightElement width="6.75rem">
                <Button
                  aria-label="Masukan Testimoni!"
                  fontWeight="bold"
                  h="1.75rem"
                  size="md"
                  colorScheme="gray"
                  variant="outline"
                  onClick={() => {
                    if (input == "")
                      toast({
                        title: "Whoops! Ada error!",
                        description: "Input tidak bisa kosong!",
                        status: "error",
                        duration: 2000,
                        isClosable: true,
                      });
                    else {
                      addTodo(input);
                    }
                  }}
                >
                  <AiOutlineSend />
                </Button>
              </InputRightElement>
            </InputGroup>
            <Flex flexDir="column">
              {todos.map((todo: any, index) => (
                <Flex key={index} justify="space-between" align="center" my={1}>
                  <Flex align="center">
                    <Icon
                      fontSize="xl"
                      mr={2}
                      as={ChevronRightIcon}
                      color={colorSecondary[colorMode]}
                    />
                    <Tooltip
                      label={
                        todo.year && todo.jurusan
                          ? `Tahun ${todo.year}, ${todo.jurusan}`
                          : `${todo.title}`
                      }
                      placement="top"
                      hasArrow
                    >
                      <Text
                        color={colorSecondary[colorMode]}
                        _hover={{ cursor: "pointer" }}
                      >
                        {todo.title}
                        {todo.name ? <strong> - {todo.name}</strong> : null}
                      </Text>
                    </Tooltip>
                  </Flex>
                  <Tooltip
                    label={
                      todo.name
                        ? `Hapus Testimoni dari "${todo.name}" ?`
                        : "Hapus Testimoni Ini ?"
                    }
                    placement="top"
                    hasArrow
                  >
                    <IconButton
                      aria-label={`Hapus "${todo.title}" dari Testimoni.`}
                      icon={<DeleteIcon color="red.400" />}
                      onClick={() => removeTodo(todo)}
                    />
                  </Tooltip>
                </Flex>
              ))}
            </Flex>
            <Flex align="center">
              <Text
                onClick={() => setTodos(myTodos)}
                _hover={{
                  cursor: "pointer",
                  color: `${colorSmall[colorMode]}`,
                }}
              >
                Reset
              </Text>
              <Divider orientation="vertical" mx={2} h={4} />
            </Flex>
          </Stack>
        </Box>
      </motion.div>
    </Flex>
  );
};

export default Testimonial;
