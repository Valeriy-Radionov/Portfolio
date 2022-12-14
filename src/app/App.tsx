import React from "react"
import "./App.scss"
import { Header } from "../components/header/Header"
import { Contacts } from "../components/сontacts/Contacts"
import { Skills } from "../components/skills/Skills"
import { Footer } from "../components/footert/Footer"
import { Projects } from "../components/my_projects/Projects"
import { Main } from "../components/main/Main"

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Skills />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  )
}

export default App
