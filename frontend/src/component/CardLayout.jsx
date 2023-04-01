import { Box, Card, CardBody, CardFooter, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { AiOutlinePhone, AiOutlineMail, AiFillHeart, AiOutlineHeart, AiOutlineDelete, AiOutlineEdit, AiOutlineGlobal } from "react-icons/ai";

const CardLayout = ({ name, email, phone, website, username, handleDeleteUserByEmail }) => {
     const [isFav, setFav] = useState(false);
     return (
          <Card w="xs" m={3}>
               <CardBody bg={"blackAlpha.100"} p={0}>
                    <Image m={"auto"} maxW={"50%"} src={`https://avatars.dicebear.com/v2/avataaars/${username}.svg`} alt="user avatar" borderRadius="lg" />
               </CardBody>
               <CardBody>
                    <VStack align>
                         <Heading size="md">{`${name}`}</Heading>
                         <HStack>
                              <AiOutlineMail /> <Text>{`${email}`}</Text>
                         </HStack>
                         <HStack>
                              <AiOutlinePhone /> <Text>{`${phone}`}</Text>
                         </HStack>
                         <HStack>
                              <AiOutlineGlobal /> <Text>{`${website}`}</Text>
                         </HStack>
                    </VStack>
               </CardBody>
               <CardFooter bg={"blackAlpha.200"} justifyContent="space-evenly" gap={3}>
                    <Box onClick={() => setFav(!isFav)} cursor="pointer">
                         {isFav ? <AiFillHeart color="red" /> : <AiOutlineHeart color="red" />}
                    </Box>
                    <Box cursor="pointer">
                         <AiOutlineEdit />
                    </Box>
                    <Box cursor="pointer" onClick={() => handleDeleteUserByEmail(email)}>
                         <AiOutlineDelete />
                    </Box>
               </CardFooter>
          </Card>
     );
};
export default CardLayout;
