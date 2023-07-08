import { staticPath } from "@/lib/$path";
import {
  Container,
  Stack,
  Heading,
  Text,
  Box,
  Card,
  CardBody,
  Image,
  Tag,
  Flex,
} from "@chakra-ui/react";

interface Member {
  name: string;
  imageSrc: string;
  tags: string[];
  description: string;
}

function MemberCard({ name, imageSrc, tags, description }: Member) {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          objectFit={"cover"}
          src={imageSrc}
          alt={`${name} member introduction`}
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{name}</Heading>
          <Flex gap={2} flexWrap={"wrap"}>
            {tags.map((el, idx) => {
              return (
                <Tag key={idx} colorScheme="teal" size={"sm"}>
                  {el}
                </Tag>
              );
            })}
          </Flex>
          <Text>{description}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
}

const MEMBERS: Member[] = [
  {
    name: "楠原 彰悟",
    imageSrc: staticPath.sk_png,
    description:
      "立命館大学卒業後、新卒でBig4系監査法人の経営企画に入社。3ヶ月で退職し、その後、個人事業で輸入やオンライン販売で生計を立てる。さらに大きくスケールするビジネスをするため独学でプログラミングを学ぶ。その後フリーランス独立。独立後は複数のスタートアップ～上場企業の開発を全てのフェーズで支援。叩き上げの技術者としてフロントエンド~インフラまで幅広く開発する傍ら、WEBクリエイターが最高の仕事ができる組織を創るため起業。",
    tags: [
      "代表社員",
      "エンジニア(FullStack)",
      "WEBデザイン",
      "バックオフィス",
    ],
  },
];

export default function Contact() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          メンバー紹介
        </Heading>
      </Stack>
      <Container maxW={"5xl"} py={12}>
        <Flex gap={4}>
          {MEMBERS.map(({ name, imageSrc, tags, description }, idx) => (
            <MemberCard
              key={idx}
              name={name}
              imageSrc={imageSrc}
              tags={tags}
              description={description}
            />
          ))}
        </Flex>
      </Container>
    </Box>
  );
}
