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
          top={{ md: "6vh" }}
          w={"100vw"}
          left={{ sm: "4vw", md: "20%", xl: "30%" }}
          pt={"30vh"}
          pl={"4%"}
        >
          <Text
            bgGradient="linear(to-t, #c850c0, #ffcc70)"
            bgClip="text"
            fontSize={{ base: "5xl", md: "8xl" }}
            fontWeight="extrabold"
          >
            Build minimum, <br />
            Scale to million.
          </Text>
        </Box>
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Stars />
        </Canvas>
      </Box>
    </>
  );
}
