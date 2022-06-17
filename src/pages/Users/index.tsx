import Link from "next/link";
import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, Text, useBreakpointValue, Spinner } from "@chakra-ui/react";
import { useQuery } from 'react-query'

import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
  const { data, isLoading, error } = useQuery('users', async () => {
    const response = await fetch('http://localhost:3000/api/users')
    const data = await response.json();

    return data;
  })

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })  

  console.log(data)

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6" >
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">Usuários</Heading>

            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20"/>}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>

          { isLoading ? (
            <Flex
              justify="center"
            >
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex
              justify="center"
            >
              <Text>Falha ao obter dados dos usuários.</Text>
            </Flex>
          ) : (
            <>
              <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4" , "4" , "6"]} color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                { isWideVersion && <Th>Data de cadastro</Th>}
                { isWideVersion && <Th></Th>}
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                 <Td px={["4" , "4" , "6"]} color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Lucas Stofella</Text>
                    <Text fontWeight="sm" color="gray.300">lucas_stofella@hotmail.com</Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>03 de junho, 2022</Td>}
                { isWideVersion && 
                  <Td width="8">
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon as={RiPencilLine} fontSize="16"/>}
                    >
                      Editar
                    </Button>
                  </Td>
                }
              </Tr>

              <Tr>
                 <Td px={["4" , "4" , "6"]} color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Lucas Stofella</Text>
                    <Text fontWeight="sm" color="gray.300">lucas_stofella@hotmail.com</Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>03 de junho, 2022</Td>}
                { isWideVersion && 
                  <Td width="8">
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon as={RiPencilLine} fontSize="16"/>}
                    >
                      Editar
                    </Button>
                  </Td>
                }
              </Tr>

              <Tr>
                 <Td px={["4" , "4" , "6"]} color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Lucas Stofella</Text>
                    <Text fontWeight="sm" color="gray.300">lucas_stofella@hotmail.com</Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>03 de junho, 2022</Td>}
                { isWideVersion && 
                  <Td width="8">
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon as={RiPencilLine} fontSize="16"/>}
                    >
                      Editar
                    </Button>
                  </Td>
                }
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
}