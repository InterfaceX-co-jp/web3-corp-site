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
} from "react-icons/io5";
import { CgCommunity } from "react-icons/cg"
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
              Cutting-edge Web3 Tech{" "}
              <Text as={"span"} color={"teal.400"}>
                X{" "}
              </Text>
              <br />
              Solid Web2.0 Base{" "}
              <Text as={"span"} color={"teal.400"}>
                X{" "}
              </Text>
              <br />
              World-Class Product Development{" "}
              <Text as={"span"} color={"teal.400"}>
                X{" "}
              </Text>
              <br />
              <Text as={"span"} color={"teal.400"}>
                InterfaceX 3.0
              </Text>
            </Heading>
            <Text color={"gray.500"} fontSize={"lg"}>
              Our strength is that we have a system that can provide all the technical support as Web5, not only with the latest Web3 technology, but also with Web2.0 technology, which is a solid foundation. We can also provide support in designing the token economy, DAOs, and other systems at the philosophical level.
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
                text={"Web3 Business Consulting"}
              />
              <Feature
                icon={
                  <Icon as={IoLogoBitcoin} color={"green.500"} w={5} h={5} />
                }
                iconBg={useColorModeValue("green.100", "green.900")}
                text={"Web3(+Web2.0) Product Development"}
              />
              <Feature
                icon={
                  <Icon as={CgCommunity} color={"purple.500"} w={5} h={5} />
                }
                iconBg={useColorModeValue("purple.100", "purple.900")}
                text={"Community Building + Community Design"}
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
