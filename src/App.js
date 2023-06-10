import "./App.css";
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";
import Contact from "./pages/Contact";
function App() {
  return (<>
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer />
      </Router>
    </div></>
  );
}

// export default App;
// import React, { useState, useEffect } from "react";
// import "./App.css";
// import "react-toastify/dist/ReactToastify.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Projects from "./pages/Projects";
// import Experience from "./pages/Experience";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import ProjectDisplay from "./pages/ProjectDisplay";
// import Contact from "./pages/Contact";
// import DarkMode from "./pages/darkmode";

// function App() {
//   const [theme, setTheme] = useState(localStorage.getItem("theme") || "");
//   const prefersDark =
//     window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
//   const defaultDark = theme === "dark" || (theme === "" && prefersDark);

//   useEffect(() => {
//     if (defaultDark) {
//       setDark();
//     } else {
//       setLight();
//     }
//   }, [defaultDark]);

//   const setDark = () => {
//     localStorage.setItem("theme", "dark");
//     document.documentElement.setAttribute("data-theme", "dark");
//     setTheme("dark");
//   };

//   const setLight = () => {
//     localStorage.setItem("theme", "light");
//     document.documentElement.setAttribute("data-theme", "light");
//     setTheme("light");
//   };

//   return (
//     <div className={`App ${defaultDark ? "dark" : "light"}`}>
//       <Router>
//         <DarkMode
//           toggleTheme={defaultDark ? setLight : setDark}
//           defaultDark={defaultDark}
//         />
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/project/:id" element={<ProjectDisplay />} />
//           <Route path="/experience" element={<Experience />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//         <Footer />
//       </Router>
//     </div>
//   );
// }

export default App;
