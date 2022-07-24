import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'TrajanusBricks', sans-serif`
  },
  textStyles: {
    title: {
      fontWeight: "extrabold",
      color: "teal.700",
      textShadow: "1px 1px white",
      pb: "10"
    },

    subtitle: {
      pb: "10",
      fontWeight: "extrabold", 
      color: "teal.700", 
      textShadow: '1px 1px white'
    },

    landingPageContent: {
      boxShadow: "0 4px 12px 0 rgba(0, 0, 0, 0.05)", 
      rounded: "lg",
      py: "8",
      px: "4"
    },

    content: {
      boxShadow: "0 4px 12px 0 rgba(0, 0, 0, 0.05)", 
      rounded: "lg",
      py: "8",
      px: "4",
      bg: "#ffffffbb",
      opacity: "0.8"
    }

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

