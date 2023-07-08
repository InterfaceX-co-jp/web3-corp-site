import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from "react-icons/io5";
import { ReactElement } from "react";

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function About() {
  return (
    <>
      <Container maxW={"5xl"} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
              textTransform={"uppercase"}
              color={"blue.400"}
              fontWeight={600}
              fontSize={"sm"}
              bg={useColorModeValue("blue.50", "blue.900")}
              p={2}
              alignSelf={"flex-start"}
              rounded={"md"}
            >
              Our Edge
            </Text>
            <Heading>
              アジャイル開発{" "}
              <Text as={"span"} color={"teal.400"}>
                X{" "}
              </Text>
              <br />
              モダンな技術選定{" "}
              <Text as={"span"} color={"teal.400"}>
                X{" "}
              </Text>
              <br />
              DevOpsと自動化{" "}
              <Text as={"span"} color={"teal.400"}>
                X{" "}
              </Text>
              <br />
              <Text as={"span"} color={"teal.400"}>
                プロダクト開発の匠
              </Text>
            </Heading>
            <Text color={"gray.500"} fontSize={"lg"}>
              私たちの強みは、ひとことでいえば「巨人の肩に乗る」ことの上手さにあります。
              プロダクト開発においてパブリッククラウドを前提にし、OSSエコシステムを使いこなすことで、他社に負けない超効率のプロダクト開発を実現します。
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.100", "gray.700")}
                />
              }
            >
              <Feature
                icon={
                  <Icon
                    as={IoAnalyticsSharp}
                    color={"yellow.500"}
                    w={5}
                    h={5}
                  />
                }
                iconBg={useColorModeValue("yellow.100", "yellow.900")}
                text={"クライアントワーク事業"}
              />
              <Feature
                icon={
                  <Icon as={IoLogoBitcoin} color={"green.500"} w={5} h={5} />
                }
                iconBg={useColorModeValue("green.100", "green.900")}
                text={"WEBサービス事業"}
              />
              <Feature
                icon={
                  <Icon as={IoSearchSharp} color={"purple.500"} w={5} h={5} />
                }
                iconBg={useColorModeValue("purple.100", "purple.900")}
                text={"WEBマーケティング支援事業"}
              />
            </Stack>
          </Stack>
          <Flex>
            <Image
              rounded={"md"}
              alt={"feature image"}
              src={
                "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              objectFit={"cover"}
            />
          </Flex>
        </SimpleGrid>
      </Container>
    </>
  );
}
