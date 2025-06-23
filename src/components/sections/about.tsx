import SectionTitle from "@components/ui/sectionTitle"
import SlideUp from "@utils/animations/slideUp"

const About = () => {
    return (
        <section id="about" className="about-area">
            <div className="container">
                <div className="row gap-100 align-items-center">
                    {/* START ABOUT IMAGE DESIGN AREA */}
                    <div className="col-lg-5">
                        <SlideUp delay={3}>
                            <div className="about-image-part">
                                <img src="/images/about/about.png" alt="About Me" />
                                {/* <div className="about-btn btn-one wow fadeInRight delay-0-4s">
                                    <h6>Available for Work</h6>
                                    <div className="circle pulse color-pulse" />
                                </div> */}
                                <div className="dot-shape">
                                    {/* <img src="/images/shape/about-dot.png" alt="Shape" /> */}
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/* / END ABOUT IMAGE DESIGN AREA */}
                    {/* START ABOUT TEXT DESIGN AREA */}
                    <div className="col-lg-7">
                        <div className="about-content-part rel z-2 rmb-55">
                            <SectionTitle className="mb-35">
                                <SectionTitle.Title>About Me</SectionTitle.Title>
                                <SectionTitle.Title><span>Full Stack Developer</span> with a passion for turning big <span>ideas </span> into fast, beautiful, and intuitive web applications.</SectionTitle.Title>
                                <SectionTitle.Description>Hello! I’m Naeem Khan a self-taught Full Stack Developer with one year of hands-on experience in building modern, user-friendly web applications. My journey began with curiosity and passion, and has grown into real-world experience crafting both frontend and backend solutions.</SectionTitle.Description>
                            </SectionTitle>
                            <SlideUp delay={2}>
                                <ul className="list-style-one two-column">
                                    <li>Backend Development</li>
                                    <li>Frontend Development</li>
                                    <li>REST API Integration</li>
                                    <li>Version Control (Git & Github)</li>
                                    <li>Agile Methodology</li>
                                    <li>Database Management</li>
                                </ul>
                            </SlideUp>
                        </div>
                    </div>
                    {/* / END ABOUT TEXT DESIGN AREA */}
                </div>
            </div>
        </section>

    )
}

export default About