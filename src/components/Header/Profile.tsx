import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Lucas Stofella</Text>
        <Text color="gray.300" fontSize="small" >lucas_stofella@hotmail.com</Text>
      </Box>

      <Avatar size="md" name="Lucas Stofella" src="https://avatars.githubusercontent.com/u/43644875?v=4"/>
    </Flex>
  );
}