import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import { FcAssistant, FcCollaboration, FcDonate } from "react-icons/fc";

interface CardProps {
  heading: string;
  description: string;
  icon: ReactElement;
  href: string;
}

const Card = ({ heading, description, icon, href }: CardProps) => {
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <Stack align={"start"} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
        {/* <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
          Learn more
        </Button> */}
      </Stack>
    </Box>
  );
};

export default function gridListWith() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          ビジネスについて
        </Heading>
        <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
          主にWEBテクノロジーを扱った事業を展開しております。
        </Text>
      </Stack>

      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={"クライアントワーク"}
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            description={
              "私たちのアジリティの高さを活かした超効率のプロダクト開発をします。パブリッククラウド・OSS・各種自動化を積極的に提案させていただきます。"
            }
            href={"#"}
          />
          <Card
            heading={"WEBサービス"}
            icon={<Icon as={FcCollaboration} w={10} h={10} />}
            description={
              "自社で複数のサービスの運営をしています。エステ業界向けマルチテナントSaaSを主軸に、ソフトウェア開発の強みを活かしています。"
            }
            href={"#"}
          />
          <Card
            heading={"WEBマーケティング支援"}
            icon={<Icon as={FcDonate} w={10} h={10} />}
            description={
              "パートナーインフルエンサーマーケティング支援、SEO・SNSコンテンツマーケティングの相談を承っております。"
            }
            href={"#"}
          />
        </Flex>
      </Container>
    </Box>
  );
}
