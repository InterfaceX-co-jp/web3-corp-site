import {
  Container,
  Stack,
  Heading,
  Text,
  Box,
  Tag,
  Table,
  Tr,
  Td,
} from "@chakra-ui/react";
import { ReactNode } from "react";

const CompanyInfoTag = ({ children }: { children: ReactNode }) => {
  return (
    <Tag colorScheme="teal" size="sm" w={"90px"} justifyContent={"center"} textAlign={"center"}>
      {children}
    </Tag>
  );
};

export default function Contact() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
         Company Profile 
        </Heading>
      </Stack>
      <Table maxW={{ md: "600px" }}>
        <Tr>
          <Td>
            <CompanyInfoTag>Company Name</CompanyInfoTag>
          </Td>
          <Td>InterfaceX LLC</Td>
        </Tr>
        <Tr>
          <Td>
            <CompanyInfoTag>Location</CompanyInfoTag>
          </Td>
          <Td>201 Olive Court, 4-1-17 Toyosaki, Kita-ku, Osaka-shi, Osaka</Td>
        </Tr>
        <Tr>
          <Td>
            <CompanyInfoTag>Representative Partner</CompanyInfoTag>
          </Td>
          <Td>Shogo Kusuhara</Td>
        </Tr>
      </Table>
    </Box>
  );
}
