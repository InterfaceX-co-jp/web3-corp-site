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
          技術スタック
        </Heading>
        <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
          特にNode.jsに強みがあります。生産性を最大化できるよう常にブラッシュアップしています。
        </Text>
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
            Design Ops
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
            Fullstack Frameworks / Backends
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
              src={staticPath.go_png}
              alt={"golang logo"}
            />
            <Image
              w={"auto"}
              h={"60px"}
              src={staticPath.go_echo_png}
              alt={"go echo framework"}
            />
            <Image
              w={"auto"}
              h={"60px"}
              src={staticPath.frourio_png}
              alt={"frourio logo"}
            />
            <Image
              w={"auto"}
              h={"60px"}
              src={staticPath.graphql_png}
              alt={"graphql logo"}
            />
            <Image
              w={"auto"}
              h={"60px"}
              src={staticPath.laravel_png}
              alt={"laravel logo"}
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
            Database / Middlewares / Protocols
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
              src={staticPath.mongodb_png}
              alt={"mongodb logo"}
            />
            <Image
              w={"auto"}
              h={"60px"}
              src={staticPath.mysql_png}
              alt={"mysql logo"}
            />
            <Image
              w={"auto"}
              h={"100px"}
              src={staticPath.grpc_png}
              alt={"grpc logo"}
            />
            <Image
              w={"auto"}
              h={"60px"}
              src={staticPath.elasticsearch_png}
              alt={"elasticsearch logo"}
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
            Infrastructures
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
              src={staticPath.aws_jpg}
              alt={"aws logo"}
            />
            <Image
              w={"auto"}
              h={"60px"}
              src={staticPath.terraform_png}
              alt={"terraform logo"}
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
            <Image
              w={"auto"}
              h={"60px"}
              src={staticPath.docker_png}
              alt={"docker logo"}
            />
          </Flex>
        </Card>
      </Container>
    </Box>
  );
}
