import Navbar from "./layouts/Navbar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
      <div className="relative">
        <Navbar />
        <Home />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
