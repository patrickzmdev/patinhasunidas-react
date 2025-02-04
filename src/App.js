import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import React from "react";
import Navigation from "./components/Navbar";
import HomePage from "./pages/FirstPage";
import Footer from "./components/Footer";
import Events from "./pages/Events";
import Historia from "./pages/Historia";
import Pets from "./pages/Pets";
import Ajudar from "./pages/Ajudar";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0.95 },
};

// Transition settings
const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 2,
};

// Wrapper for animating pages
function PageWrapper({ component: Component }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="out"
      variants={variants}
      transition={pageTransition}
      className="flex-grow"
    >
      <Component />
    </motion.div>
  );
}

// Component to handle animated routes
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper component={HomePage} />} />
        <Route path="/events" element={<PageWrapper component={Events} />} />
        <Route path="/history" element={<PageWrapper component={Historia} />} />
        <Route path="/pets" element={<PageWrapper component={Pets} />} />
        <Route path="/ajudar" element={<PageWrapper component={Ajudar} />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <div className="flex-grow">
          <AnimatedRoutes />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
