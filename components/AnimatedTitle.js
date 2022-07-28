import { motion } from 'framer-motion'

export default function TitleComp(titles) {
    // const { welcome, lu, about, members, voting, events, estates, galleries, podcasts } = titles

    const title = "Welcome to Taurosdao"

    const sentence = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.5,
                staggerChildren: 0.08,
            },
        },
    }

    const letter ={
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
        },
    }

    return (
        <motion.div
            variants={sentence}
            initial="hidden"
            animate="visible"
        >
        {title.split("").map((char, index) => {
            return (
                <motion.span key={char + '-' + index} variants={letter}>
                    {char}
                </motion.span>
            )
        })}
        </motion.div>
    )
}



