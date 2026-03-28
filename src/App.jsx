import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import ScrollToTop from './components/ScrollToTop';

// Page components (placeholders for now)
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Insights from './pages/Insights';
import Contact from './pages/Contact';
import ProjectDetails from './pages/ProjectDetails';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
