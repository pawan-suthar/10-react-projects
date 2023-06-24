import React from "react";
import { Customcard } from "../../../chakra/Customcard";
import { Tag, Text } from "@chakra-ui/react";

const Infcards = ({ img, text, tagtext, inverted }) => {
  return (
    <Customcard
      bgImage={img}
      bgSize="cover"
      bgRepeat="no-repeat"
      bgColor={inverted ? "p.purple" : "white"}
    >
      <Tag
        borderRadius="full"
        color={inverted ? "p.purple" : "white"}
        bg={inverted ? "white" : "p.purple"}
      >
        {tagtext}
      </Tag>
      <Text
        mt="4"
        textStyle="h5"
        fontWeight="medium"
        color={inverted ? "white" : "black.80"}
      >
        {text}
      </Text>
    </Customcard>
  );
};

export default Infcards;
