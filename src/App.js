import TextParallaxContentExample from "./components/TextParallaxContent";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import AboutTheBusiness from "./components/AboutTheBusiness"



function App() {
    return (
        <div>
          <Navbar />
          <Hero/>
          <AboutMe/>
          <AboutTheBusiness/>
          
          <div style={{ paddingTop: '80px' }}>
            <TextParallaxContentExample />
          </div>
        </div>
    );
}

export default App;
