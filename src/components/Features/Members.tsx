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
    <Card maxW="sm" minW={400}>
      <CardBody>
        <Image
          h={"350px"}
          w={"100%"}
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
   name: "Nitin Garg",
   imageSrc: staticPath.nitin_gray_jpg,
   description: "After graduating in the IT stream from an engineering college affiliated with UPTU University in India, Nitin has built a strong and valuable background in the IT industry.Throughout his career, he has had the opportunity to work with several leading companies, including Société Générale Investment Bank, renowned for being one of the top investment banks in France. During his tenure there, he served as a technical lead, showcasing his exceptional skills and leadership abilities.Currently, Nitin holds the esteemed position of a blockchain engineer at a prestigious cryptocurrency and blockchain firm based in Japan. This firm is known for its cutting-edge proprietary private blockchain technology. In this role, Nitin has been actively involved in developing and enhancing blockchain solutions, utilizing his extensive knowledge and experience in the field. With his 15+ years of IT experience, Nitin has honed his skills as a backend engineer, cloud engineer, and DevOps engineer.",
   tags: [
    "Techlead",
    "Blockchain Lead Engineer",
    "Backend Lead Engineer",
    "DevOps",
    "SRE"
   ]
  },
  {
    name: "Tsubasa Tanaka",
    imageSrc: staticPath.tsubasa_tanaka_jpg,
    description: "He studied statistics and machine learning at the University of Texas and worked as a data analyst at Square for about two years while in school. After returning to Japan, he started a human resource service business specializing in foreign engineers and is also the director of another corporation. he is also familiar with DAO and NFT design in the web 3.0 field and has experience in several projects, including project leader of a blockchain game.",
    tags: [
      "Blockchain Consulting",
      "Blockchain Game",
      "Project Management",
      "Sales"
    ]
  },
  {
    name: "Shogo Kusuhara",
    imageSrc: staticPath.sk_png,
    description: "After graduating from Ritsumeikan University, he joined a Big 4 audit firm as a new graduate in corporate planning, leaving after 3 months to make a living through importing and online sales as a sole trader. He taught himself programming in order to scale up his business even further. He then became an independent freelancer. Since becoming independent, he has helped several startups to listed companies in all phases of development. While developing a wide range of projects from front-end to infrastructure as a seasoned engineer, he started his own company to create an organization where web creators can do their best work to create exceptional products.",
    tags: [
      "Representative Partner",
      "Fullstack Engineer(Web2.0)",
      "Blockchain Engineer",
      "Backoffice",
    ],
  },
];

export default function Contact() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          Member Introduction  
        </Heading>
      </Stack>
      <Container maxW={"5xl"} py={{sm: 4, md: 12}}>
        <Flex gap={4} flexDirection={{ sm: "column", md: "row"}}>
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
