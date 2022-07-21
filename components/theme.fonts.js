import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'TrajanusBricks', sans-serif`
  },
  textStyles: {
    primary: {fontFamily: "TrajanusBricksXtra"}
  },
  styles: {
    global: {
      body: {
        fontWeight: 'light',
        lineHeight: 'taller',
        color: "black"
      }
    }
  }
})

export default theme