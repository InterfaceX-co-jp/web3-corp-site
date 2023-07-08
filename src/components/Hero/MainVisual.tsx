import { Box, Text } from "@chakra-ui/react";
import { Canvas } from "@react-three/fiber";
import Stars from "@/webgl/Stars";

export default function MainVisual() {
  return (
    <>
      <Box
        w={"100vw"}
        h={"100vh"}
        backgroundColor={"#12071f"}
        position={"relative"}
      >
        <Box
          position={"absolute"}
          top={{ md: "1vh" }}
          w={"100vw"}
          left={{ sm: "4vw", md: "10%", xl: "30%" }}
          pt={"20vh"}
          pl={"4%"}
        >
          <Text
            bgGradient="linear(to-t, #c850c0, #ffcc70)"
            bgClip="text"
            fontSize={{ base: "5xl", md: "8xl" }}
            fontWeight="extrabold"
          >
            Web 3.0 For All. <br />
            Decentralization <br />
            Begins From Here.
          </Text>
        </Box>
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Stars />
        </Canvas>
      </Box>
    </>
  );
}
