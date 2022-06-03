import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({showProfileData = true}: ProfileProps) {
  return (
    <Flex align="center">
      {
        showProfileData && (
          <Box mr="4" textAlign="right">
            <Text>Lucas Stofella</Text>
            <Text color="gray.300" fontSize="small" >
              lucas_stofella@hotmail.com
            </Text>
          </Box>
        )
      }

      <Avatar size="md" name="Lucas Stofella" src="https://avatars.githubusercontent.com/u/43644875?v=4"/>
    </Flex>
  );
}