import { Box, Flex, Button, Stack, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box
        position="fixed"
        width={"100vw"}
        top={0}
        backdropFilter="auto"
        backdropBlur="8px"
        zIndex={"sticky"}
      >
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          position={"relative"}
          px={4}
        >
          <Box>InterfaceX</Box>

          <Flex alignItems={"center"} px={4}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
