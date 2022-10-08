import { motion } from 'framer-motion'

const welcome = "Welcome to Taurosdao"
const lu = "Labyrinthine Unreal"
const about = "About"
const members = "Members"
const voting = "Voting"
const events = "Events"
const estates = "Estates"
const galleries = "Art Galleries"
const podcasts = "Far Off Podcast"
const districts = "Districts"
const blog = "Blog"

const sentence = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08 },
    },
}

const letter ={
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
}

export default function TitleComp() {

    return (
        <motion.div
            className="load-screen--message"
            variants={sentence}
            initial="hidden"
            animate="visible"

        >
        {welcome.split("").map((char, index) => {
            return (
                <motion.span key={char + '-' + index} variants={letter}>
                    {char}
                </motion.span>
            )
        })}
        </motion.div>
    )
}


function LU() {

    return (
        <motion.div
            className="load-screen--message"
            variants={sentence}
            initial="hidden"
            whileInView="visible"
        >
        {lu.split("").map((char, index) => {
            return (
                <motion.span key={char + '-' + index} variants={letter}>
                    {char}
                </motion.span>
            )
        })}
        </motion.div>
    )
}

function About() {

    return (
        <motion.div
            className="load-screen--message"
            variants={sentence}
            initial="hidden"
            whileInView="visible"
        >
        {about.split("").map((char, index) => {
            return (
                <motion.span key={char + '-' + index} variants={letter}>
                    {char}
                </motion.span>
            )
        })}
        </motion.div>
    )
}

function Members() {

    return (
        <motion.div
            className="load-screen--message"
            variants={sentence}
            initial="hidden"
            whileInView="visible"
        >
        {members.split("").map((char, index) => {
            return (
                <motion.span key={char + '-' + index} variants={letter}>
                    {char}
                </motion.span>
            )
        })}
        </motion.div>
    )
}

function Voting() {

    return (
        <motion.div
            className="load-screen--message"
            variants={sentence}
            initial="hidden"
            whileInView="visible"
        >
        {voting.split("").map((char, index) => {
            return (
                <motion.span key={char + '-' + index} variants={letter}>
                    {char}
                </motion.span>
            )
        })}
        </motion.div>
    )
}

function Events() {

    return (
        <motion.div
            className="load-screen--message"
            variants={sentence}
            initial="hidden"
            whileInView="visible"
        >
        {events.split("").map((char, index) => {
            return (
                <motion.span key={char + '-' + index} variants={letter}>
                    {char}
                </motion.span>
            )
        })}
        </motion.div>
    )
}

function Estates() {

    return (
        <motion.div
            className="load-screen--message"
            variants={sentence}
            initial="hidden"
            whileInView="visible"
        >
        {estates.split("").map((char, index) => {
            return (
                <motion.span key={char + '-' + index} variants={letter}>
                    {char}
                </motion.span>
            )
        })}
        </motion.div>
    )
}

function Galleries() {

    return (
        <motion.div
            className="load-screen--message"
            variants={sentence}
            initial="hidden"
            whileInView="visible"
        >
        {galleries.split("").map((char, index) => {
            return (
                <motion.span key={char + '-' + index} variants={letter}>
                    {char}
                </motion.span>
            )
        })}
        </motion.div>
    )
}

function Podcasts() {

    return (
        <motion.div
            className="load-screen--message"
            variants={sentence}
            initial="hidden"
            whileInView="visible"
        >
        {podcasts.split("").map((char, index) => {
            return (
                <motion.span key={char + '-' + index} variants={letter}>
                    {char}
                </motion.span>
            )
        })}
        </motion.div>
    )
}

function Districts() {

    return (
        <motion.div
            className="load-screen--message"
            variants={sentence}
            initial="hidden"
            whileInView="visible"
        >
        {districts.split("").map((char, index) => {
            return (
                <motion.span key={char + '-' + index} variants={letter}>
                    {char}
                </motion.span>
            )
        })}
        </motion.div>
    )
}

function Blog() {

    return (
        <motion.div
            className="load-screen--message"
            variants={sentence}
            initial="hidden"
            whileInView="visible"
        >
        {blog.split("").map((char, index) => {
            return (
                <motion.span key={char + '-' + index} variants={letter}>
                    {char}
                </motion.span>
            )
        })}
        </motion.div>
    )
}

export { LU, About, Members, Voting, Events, Estates, Galleries, Podcasts, Districts, Blog }




