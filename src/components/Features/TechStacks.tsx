import { staticPath } from "@/lib/$path";
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Stack,
  Image,
  Card,
} from "@chakra-ui/react";

export default function TechStacks() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          Our Technologies
        </Heading>
        {/* <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
          We are focusing on Node.js ecosystem to stay competitive in quolity + 
        </Text> */}
      </Stack>

      <Container maxW={"6xl"} mt={12}>
        <Card mb={4} p={4}>
          <Heading
            as={"h4"}
            size="md"
            textColor={"gray"}
            mb={4}
            textAlign={"center"}
          >
            Frontend
          </Heading>
          <Flex gap={4} flexWrap={"wrap"} justifyContent={"center"}>
            <Image
              w={"auto"}
              h={"60px"}
              src={staticPath.typescript_png}
              alt={"TypeScript logo"}
            />
            <Image
              h={"60px"}
              w={"auto"}
              src={staticPath.next_png}
              alt={"next.js logo"}
            />
            <Image
              w={"auto"}
              h={"60px"}
              src={staticPath.nuxt_png}
              alt={"nuxt.js logo"}
            />
          </Flex>
        </Card>
        <Card mb={4} p={4}>
          <Heading
            as={"h4"}
            size="md"
            textColor={"gray"}
            mb={4}
            textAlign={"center"}
          >
            Design / Modeling
          </Heading>
          <Flex
            gap={4}
            alignItems={"center"}
            justifyContent={"center"}
            flexWrap={"wrap"}
          >
            <Image
              w={"auto"}
              h={"60px"}
              src={staticPath.belnder_png}
              alt={"belnder logo"}
            />
            <Image
              w={"auto"}
              h={"100px"}
              src={staticPath.Maya_Logo_2013_png}
              alt={"maya logo"}
            />
            <Image
              w={"auto"}
              h={"60px"}
              src={staticPath.storybook_png}
              alt={"storybook logo"}
            />
            <Image
              w={"auto"}
              h={"60px"}
              src={staticPath.figma_png}
              alt={"figma logo"}
            />
          </Flex>
        </Card>
        <Card mb={4} p={4}>
          <Heading
            as={"h4"}
            size="md"
            textColor={"gray"}
            mb={4}
            textAlign={"center"}
          >
            Blockchains
          </Heading>
          <Flex
            gap={4}
            alignItems={"center"}
            justifyContent={"center"}
            flexWrap={"wrap"}
          >
            <Image
              w={"auto"}
              h={"60px"}
              src={staticPath.sol_png}
              alt={"SOL logo"}
            />
            <Image
              w={"auto"}
              h={"60px"}
              src={staticPath.ton_png}
              alt={"TON logo"}
            />
            <Image
              w={"auto"}
              h={"60px"}
              src={staticPath.eth_png}
              alt={"ETH logo"}
            />
            <Image
              w={"auto"}
              h={"60px"}
              src={staticPath.polygon_png}
              alt={"MATIC framework"}
            />
            <Image
              w={"auto"}
              h={"60px"}
              src={staticPath.bnb_chain_png}
              alt={"BNB Chain logo"}
            />
            <Image
              w={"auto"}
              h={"60px"}
              src={staticPath.avax_png}
              alt={"AVAX logo"}
            />
            <Image
              w={"auto"}
              h={"60px"}
              src={staticPath.ftm_png}
              alt={"FTM logo"}
            />
          </Flex>
        </Card>
        <Card mb={4} p={4}>
          <Heading
            as={"h4"}
            size="md"
            textColor={"gray"}
            mb={4}
            textAlign={"center"}
          >
            Supporting Languages
          </Heading>
          <Flex
            gap={8}
            alignItems={"center"}
            justifyContent={"center"}
            flexWrap={"wrap"}
          >
            <Image
              w={"auto"}
              h={"60px"}
              src={staticPath.go_png}
              alt={"golang logo"}
            />
            <Image
              w={"auto"}
              h={"60px"}
              src={staticPath.typescript_png}
              alt={"TS logo"}
            />
            <Image
              w={"auto"}
              h={"100px"}
              src={staticPath.rust_png}
              alt={"rust logo"}
            />
            <Image
              w={"auto"}
              h={"60px"}
              src={staticPath.python_png}
              alt={"python logo"}
            />
          </Flex>
        </Card>
        <Card mb={4} p={4}>
          <Heading
            as={"h4"}
            size="md"
            textColor={"gray"}
            mb={4}
            textAlign={"center"}
          >
            Infrastructures / Node as a Service
          </Heading>
          <Flex
            gap={8}
            alignItems={"center"}
            justifyContent={"center"}
            flexWrap={"wrap"}
          >
            <Image
              w={"auto"}
              h={"60px"}
              src={staticPath.alchemy_logo_png}
              alt={"alchemy logo"}
            />
            <Image
              w={"auto"}
              h={"60px"}
              src={staticPath.INFURA_png}
              alt={"INFURA logo"}
            />
            <Image
              w={"auto"}
              h={"60px"}
              src={staticPath.aws_jpg}
              alt="AWS logo"
            />
            <Image
              w={"auto"}
              h={"60px"}
              src={staticPath.firebase_png}
              alt={"firebase logo"}
            />
            <Image
              w={"auto"}
              h={"60px"}
              src={staticPath.mongodb_atlas_png}
              alt={"mongodb atlas logo"}
            />
          </Flex>
        </Card>
      </Container>
    </Box>
  );
}
