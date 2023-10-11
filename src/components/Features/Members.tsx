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
    <Card maxW="sm" minW={{ md: 400 }}>
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
    <Box p={4} w={"100vw"}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"} mb={12}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          Member Introduction  
        </Heading>
      </Stack>
      <Flex gap={4}  flexWrap={"wrap"} justifyContent={"center"}>
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
    </Box>
  );
}
