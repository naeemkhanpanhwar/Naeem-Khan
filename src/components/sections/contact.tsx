import SectionTitle from "@components/ui/sectionTitle"
import SlideUp from "@utils/animations/slideUp"

const Contact = () => {
    return (
        <section id="contact" className="contact-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="contact-content-part pt-5 rpt-0 rmb-25 wow fadeInUp delay-0-2s">
                            <SectionTitle className="mb-40">
                                <SectionTitle.Title><span>Contact me</span></SectionTitle.Title>
                                <SectionTitle.Title>Let’s Create Something Exceptional Together</SectionTitle.Title>
                                <SectionTitle.Description>I’m always open to discussing new projects, creative ideas, or collaboration opportunities. Let’s build something great together.</SectionTitle.Description>
                            </SectionTitle>
                            <SlideUp delay={3} className="single-contact">
                                <div className="contact-icon">
                                    <i className="fa fa-phone" />
                                </div>
                                <h2>Contact number:</h2>
                                <p>+923173433135</p>
                            </SlideUp>
                            
                            <SlideUp delay={4} className="single-contact">
                                <div className="contact-icon">
                                    <i className="fa fa-envelope" />
                                </div>
                                <h2>Email me:</h2>
                                <p>naeemkhanpanhwar005@mail.com</p>
                            </SlideUp>

                            <SlideUp delay={2} className="single-contact wow fadeInUp">
                                <div className="contact-icon">
                                    <i className="fab fa-linkedin" />
                                </div>
                                <h2>LinkedIn</h2>
                                <p>https://www.linkedin.com/in/naeem786/</p>
                            </SlideUp>
                            
                        </div>
                    </div>
                    {/* START CONTACT FORM DESIGN AREA */}
                    <div className="col-lg-8">
                        <SlideUp delay={2} className="contact-form contact-form-area overflow-hidden">
                            <form id="contactForm" className="contactForm" name="contactForm" action="assets/php/form-process.php" method="post">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="name">Your Name</label>
                                            <input type="text" id="name" name="name" className="form-control" defaultValue="" placeholder="Diego Liam" required data-error="Please enter your Name" />
                                            <label htmlFor="name" className="for-icon"><i className="far fa-user" /></label>
                                            <div className="help-block with-errors" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="email">Email Address</label>
                                            <input type="email" id="email" name="email" className="form-control" defaultValue="" placeholder="hello@websitename.com" required data-error="Please enter your Email" />
                                            <label htmlFor="email" className="for-icon"><i className="far fa-envelope" /></label>
                                            <div className="help-block with-errors" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="phone_number">Phone Number</label>
                                            <input type="text" id="phone_number" name="phone_number" className="form-control" defaultValue="" placeholder={'+1234567890'} required data-error="Please enter your Phone Number" />
                                            <label htmlFor="phone_number" className="for-icon"><i className="far fa-phone" /></label>
                                            <div className="help-block with-errors" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="subject">Subject</label>
                                            <input type="text" id="subject" name="subject" className="form-control" defaultValue="" placeholder="Subject" required data-error="Please enter your Subject" />
                                            <label htmlFor="subject" className="for-icon"><i className="far fa-text" /></label>
                                            <div className="help-block with-errors" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="message">Message</label>
                                            <textarea name="message" id="message" className="form-control" rows={4} placeholder="Write Yur message" required data-error="Please Write your Message" defaultValue={""} />
                                            <div className="help-block with-errors" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group mb-0">
                                            <button type="submit" className="theme-btn">
                                                Send Me Message <i className="far fa-angle-right" />
                                            </button>
                                            <div id="msgSubmit" className="hidden" />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </SlideUp>
                    </div>
                    {/* / END CONTACT FORM DESIGN AREA */}
                </div>
            </div>
        </section>

    )
}

export default Contact