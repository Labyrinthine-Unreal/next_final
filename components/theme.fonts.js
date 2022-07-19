import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'TrajanusBricks', sans-serif`
  },
  textStyles: {
    primary: {fontFamily: "TrajanusBricksXtra"}
  }
})

export default theme