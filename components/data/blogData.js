import styles from '@styles/Blog.module.css'

const blogData = [
    {
        title: (<p id="panopticon">Panopticon: <em>Darkness in Light</em></p>),
        date: "aug. 15, 2022",
        author: "elytron frass",
        blogContent: (<p>As a concept, the panopticon presents itself in the form of a central observational tower encircled by prison cells. From the inscrutable tower, a guard can observe every inmate in their cells. Some believe in an art which, not only attains its own agency, but stares back at its gazing admirers. Panopticon: <em>Darkness in Light</em>, is a digitized gift to those seeking the echelon in art voyeurism, where art is laid fetishistically bare as vulnerable specimen, but also infects by turning the occulted gaze of the observer in on itself.
        <br /><br />
        <video
            className={styles.blogTrailer}
            controls
            src="/videos/Panopticon.mp4"
            objectfit="cover"
            layout="fill"
        />
        <br /><br />
        The Gallery is designed by Lev of the <a className={styles.blogLink} href='https://twitter.com/libeskindARTS' target="blank">LIBESKIND ARTS</a> Project and <a className={styles.blogLink} href='https://twitter.com/sodomstar' target="blank">Sodomstar</a>. The title itself refers both to the dark aspects of this transparent, &#8220;all in view&#8221;, not merely architectural but political design system, and to the fact that mostly &#8220;dark art&#8221; will be curated. A means to simulate, through art, our digital culture of nonstop surveillance, Panopticon: <em>Darkness in Light</em> reflects our current state of existence: one which is watched all the time, but somehow still behaves as if it weren&apos;t. </p>)
    }
]

export default blogData