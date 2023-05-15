import { Text } from "@chakra-ui/react";

const Paragraph = ({ children }) => (
    <Text
      mb="4"
      fontFamily="PT Serif"
      fontSize={{ base: "xs", md: "sm", lg: "md" }}
      lineHeight="tall"
    >
      {children}
    </Text>
  )

export default Paragraph;