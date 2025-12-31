import Contact from "./components/contact/contact"
import Footer from "./components/footer/footer"
import Introduction from "./components/NavBar/introduction/Introduction"
import Navbar from "./components/NavBar/Navbar"
import Skills from "./components/NavBar/Skills/Skills"
import Work from "./components/NavBar/works/work"


function App() {


  return (
    <div className="App">
            <Navbar/>
            <Introduction/>
            <Skills/>
            <Work/>
            <Contact/>
            <Footer/>
            
            
    </div>
  )
}

export default App
