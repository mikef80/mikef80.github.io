import AboutMe from "./components/AboutMe/AboutMe";
import Header from "./components/Header/Header"
import Portfolio from "./components/Portfolio/Portfolio";

function App() {

  return (
    <div className="container mx-auto font-firaSans my-auto pt-3 w-[90%]">
      <Header />
      <AboutMe />
      <Portfolio />
    </div>
  )
}

export default App
