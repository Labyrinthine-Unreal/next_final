import '@google/model-viewer';
import { Box } from "@chakra-ui/react"

const AragogModel = () => (
    <Box align="center">
        <model-viewer
            src="glbs/Aragog.glb"
            ios-src=""
            poster="images/game/Aragog.jpg"
            shadow-intensity="1"
            camera-controls
            auto-rotate
            ar
        ></model-viewer>
    </Box>
)

export default AragogModel;