import About from '@components/sections/about'
    import Contact from '@components/sections/contact'
import Hero from '@components/sections/hero'
import Portfolio from '@components/sections/portfolio'
import Resume from '@components/sections/resume'
import Services from '@components/sections/services'
import Skills from '@components/sections/skills'

const Home = () => {
    return (
        <main>
            <Hero />
            <About />
            <Resume />
            <Services />
            <Skills />
            <Portfolio />
            <Contact />
        </main>
    )
}

export default Home