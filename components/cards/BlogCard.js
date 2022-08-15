import { Flex, Box, Heading, Collapse, useDisclosure, Button, Spacer } from '@chakra-ui/react'
import {
    FacebookShareButton,
    FacebookIcon,
    PinterestShareButton,
    PinterestIcon,
    RedditShareButton,
    RedditIcon,
    TwitterShareButton,
    TwitterIcon,
    TumblrShareButton,
    TumblrIcon,
  } from 'next-share'

export default function ProductCard({ article }) {
  const { title, date, author, blogContent, share } = article;
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
            <Flex mt={4} gap={4}>
                <FacebookShareButton url={share} >
                    <FacebookIcon size={20} round />
                </FacebookShareButton>
                <TwitterShareButton
                    url={share} >
                    <TwitterIcon size={20} round />
                </TwitterShareButton>
                <RedditShareButton
                    url={share} >
                    <RedditIcon size={20} round />
                </RedditShareButton>
                <PinterestShareButton
                    url={share} >
                    <PinterestIcon size={20} round />
                </PinterestShareButton>
                <TumblrShareButton
                    url={share} >
                    <TumblrIcon size={20} round />
                </TumblrShareButton>
                <Spacer />
                <Box align="right">
                    <Button variant="outline" onClick={onToggle}>
                        {isOpen ?  "Read less" : "Read more"}
                    </Button>
                </Box>
            </Flex>
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
