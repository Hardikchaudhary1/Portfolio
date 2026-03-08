import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground relative selection:bg-primary/20 selection:text-white overflow-x-hidden font-sans antialiased">
      <Navbar />

      <main className="relative z-10 w-full">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
