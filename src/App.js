import React from "react"
import "./styles/main.scss"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import IntroductionSection from "./Components/IntroductionSection"
import Content from "./Components/Content"

function App() {
  return (
      <div className="App">
           <Header />
           <IntroductionSection />
          <Content />
            <Footer />
      </div>


  )
}
export default App
