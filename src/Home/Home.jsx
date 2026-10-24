import About from "../Components/About/About";
import Contact from "../Components/Contact/Contact";
import Experience from "../Components/Experience/Experience";
import Expertise from "../Components/Expertise/Expertise";
import Hero from "../Components/Hero/Hero";
import Navbar from "../Components/Navbar/Navbar";
import "./Home.css";

function Home() {
  return (
    <div className="home">
        
        <Navbar/>
        <Hero/>
        <Experience/>
        <Expertise/>
        <About/>
        <Contact/>

    </div>
          
  );
}

export default Home;