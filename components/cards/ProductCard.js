import { Box, Text } from '@chakra-ui/react'

var countDownDate = new Date("Sep 30, 2022 10:00:00").getTime();

var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Mint is Live";
  }
}, 1000);

export default function ProductCard({ product, setModalData }) {
  const { imageUrl, imageAlt, title, free, presalePrice, salePrice, active } = product;

  return (
    <Box
      maxW="350px"
      h="full"
      textAlign="left"
      cursor="pointer"
      bg="white"
      rounded="xl"
      boxShadow='dark-lg'
      filter='auto'
      brightness='90%'
      p={2}
      borderWidth="1px"
      _hover={{
        bg: "white",
        color: "teal",
        transition: "transform 0.15s ease-in-out",
        transform: "scale3d(1.05, 1.05, 1.05)",
        boxShadow: 'dark-lg',
        brightness: '100%'
      }}
      >
      <Box onClick={() => setModalData(product)}>
        <Box
          w="100%"
          height="300px"
          position="relative"
          overflow="hidden"
          roundedTop="lg"
        >
          <video
              autoPlay
              muted
              loop
              src={imageUrl}
              alt={imageAlt}
              objectfit="cover"
              layout="fill"
              />
        </Box>
        <Box p="6">
          <Box fontWeight="semibold" as="h4" lineHeight="tight">
            {title}
          </Box>
          {title == "TAUROS MEMBERSHIP CARD"? <Text id="demo"></Text> : <Text>Mint is not active</Text>}
            {/* <Box>{free}</Box>
            <Box>{presalePrice}</Box>
            <Box>{salePrice}</Box> */}
        </Box>
      </Box>
      <Box pl={6} pb={3} fontSize="sm">
      {presalePrice}
      <br />
      {salePrice}
      </Box>
    </Box>
  );
}
