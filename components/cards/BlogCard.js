import { Flex, Box, Heading, Collapse, useDisclosure, Button } from '@chakra-ui/react'

export default function ProductCard({ article }) {
  const { title, date, author, blogContent } = article;
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Flex gap={10} mb={20}>

        <Box textStyle="blogContent">
            <Collapse in={isOpen} startingHeight={142}>
            
                <Box fontSize="large" textStyle="subtitle">
                    {title}
                </Box>
                <Box>
                    {blogContent}
                </Box>
            </Collapse>
            <Box align="right">
                <Button mt={4} variant="outline" onClick={onToggle}>
                    {isOpen ?  "Read less" : "Read more"}
                </Button>
            </Box>
        </Box>

        <Heading pt={20} mt={3} textStyle="title">
            <Box w={140} fontSize="medium" pb={6}>
                {date}
            </Box>
            <Box fontSize="medium">
                {author}
            </Box>
        </Heading>

    </Flex>
  );
}
