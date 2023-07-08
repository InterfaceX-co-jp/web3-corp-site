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
    <Tag colorScheme="teal" size="sm" w={"90px"} justifyContent={"center"}>
      {children}
    </Tag>
  );
};

export default function Contact() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          会社概要
        </Heading>
      </Stack>
      <Table maxW={{ md: "600px" }}>
        <Tr>
          <Td>
            <CompanyInfoTag>社名</CompanyInfoTag>
          </Td>
          <Td>InterfaceX合同会社</Td>
        </Tr>
        <Tr>
          <Td>
            <CompanyInfoTag>所在地</CompanyInfoTag>
          </Td>
          <Td>大阪府大阪市北区豊崎４−１−１７ オリーブコート２０１</Td>
        </Tr>
        <Tr>
          <Td>
            <CompanyInfoTag>代表社員</CompanyInfoTag>
          </Td>
          <Td>楠原 彰悟</Td>
        </Tr>
        <Tr>
          <Td>
            <CompanyInfoTag>事業内容</CompanyInfoTag>
          </Td>
          <Td>
            <Box w={"fit-content"}>
              <Text>
                (1)コンピュータのソフトウェア及びハードウェアの企画、研究、開発、設計、製造、販
                売、保守、リース、賃貸、輸出入並びにそれらに関するコンサルティング業務
              </Text>
              <Text>
                (2)ＥＣ（電子商取引）サイト、その他各種ウェブサイトの企画、制作、販売、配信、運
                営及び管理
              </Text>
              <Text>(3)人材育成、能力開発のための教育事業</Text>
              <Text>(4)前各号に附帯関連する一切の事業</Text>
            </Box>
          </Td>
        </Tr>
      </Table>
    </Box>
  );
}
