import SlideUp from '@utils/animations/slideUp';
import CountUp from 'react-countup';
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true
  });

  return (
    <section id="home" className="main-hero-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 col-sm-12">
            {/* START HERO DESIGN AREA */}
            <SlideUp className="hero-content rmb-25 text-center">
              <h2>Hi! My name is Naeem Khan</h2>
              <h1>Full Stack <span>Java</span> Developer</h1>
              <div className="dot-shape">
                {/* <img src="/images/shape/about-dot.png" alt="Shape" /> */}
              </div>
              <div className="dot-shape2">
                {/* <img src="/images/shape/dot-shape-circle.png" alt="Shape" /> */}
              </div>
              <div className="hero-btns">
                <a href="#" className="theme-btn">Download CV <i className="far fa-angle-right" /></a>
              </div>
            </SlideUp>
            {/* / END HERO DESIGN AREA */}
            {/* START COUNTER DESIGN AREA */}
            <SlideUp delay={2}>
              <div ref={ref} className="hero-counter-area d-flex justify-content-around wow fadeInUp delay-0-4s">
                <div className="counter-item counter-text-wrap">
                  <span className="count-text plus">{inView && <CountUp end={1} />}</span>
                  <span className="counter-title">Years Of Experience</span>
                </div>
                <div className="counter-item counter-text-wrap">
                  <span className="count-text plus">{inView && <CountUp end={10} />}</span>
                  <span className="counter-title">Complete Projects</span>
                </div>
                <div className="counter-item counter-text-wrap">
                  <span className="count-text percent">{inView && <CountUp end={95} />}</span>
                  <span className="counter-title">Client Satisfactions</span>
                </div>
              </div>
            </SlideUp>
            {/* / END COUNTER DESIGN AREA */}
          </div>
        </div>
      </div>
    </section>

  )
}

export default Hero