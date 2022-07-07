export default function MintVideoClip(props) {
    return (
        <video
            autoPlay
            muted
            src={props.src}
            alt={props.alt}
            />
    )
}