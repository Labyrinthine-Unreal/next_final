import '@google/model-viewer';
import { Box } from "@chakra-ui/react"
import styles from "@styles/AragogModel.module.css"
import { MdSubtitles } from 'react-icons/md';

const AragogModel = () => (
    <Box align="center" className={styles.card}>
        <model-viewer className={MdSubtitles.model}
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