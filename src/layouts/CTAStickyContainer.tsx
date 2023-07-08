import {
  Stack,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Text,
  Flex,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaLine } from "react-icons/fa";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <>
      <chakra.button
        bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
        rounded={"full"}
        w={12}
        h={12}
        cursor={"pointer"}
        as={"a"}
        target="_blank"
        href={href}
        display={"inline-flex"}
        alignItems={"center"}
        justifyContent={"center"}
        transition={"background 0.3s ease"}
        _hover={{
          bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
        }}
      >
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    </>
  );
};

export default function CTAStickyContainer() {
  return (
    <>
      <Stack
        position={"fixed"}
        bottom={4}
        right={4}
        direction={"row"}
        spacing={6}
        backdropFilter="auto"
        backdropBlur="1px"
      >
        <Flex alignItems={"center"} flexDirection={"column"} gap={2}>
          <SocialButton label={"LINE"} href={"https://lin.ee/VyPL3YA"}>
            <FaLine />
          </SocialButton>
          <Flex alignItems={"center"} gap={1}>
            <Text fontSize={4}>LINEからお問い合わせ</Text>
          </Flex>
        </Flex>
      </Stack>
    </>
  );
}
