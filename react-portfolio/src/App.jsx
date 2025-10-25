import './App.css'
import './index.css'; 
import NavBar from './components/NavBar.jsx'
import HeroPage from './components/HeroPage.jsx'
import ProjectsPage from './components/ProjectPage.jsx';
import ContactPage from "./components/ContactPage.jsx";

function App() {
  return (
    <>
      <NavBar/>
      <HeroPage/>
      <ProjectsPage/>
      <ContactPage/>
    </>
  )
}

export default App
