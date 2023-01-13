import NavBar from "./components/NavBar";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Timeline from "./components/Timeline";

function App() {
  return (
    <div className='h-screen bg-dot-pattern bg-[length:75px_75px]'>
      <NavBar />
      <About />
      <Portfolio />
      <Skills />
      <Timeline />
      <Footer />
    </div>
  );
}

export default App;
