import Nav from "./nav"
import Hero from "./hero"
import Footer from "./footer"
import Projects from "./projects"
import Resume from "./resume"

const main = () => {
    return (
        <div className="bg-zinc-800">
            <Nav/>
            <Hero/>
            <Projects/>
            <Resume/>
            <Footer/>
        </div>
    )
}

export default main