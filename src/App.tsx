import React from 'react';
import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Projects} from "./my_projects/Projects";
import {JobOption} from "./job_option/JobOption";
import {Contacts} from "./сontacts/Contacts";
import {Footer} from "./Footert/Footer";

function App() {
  return (
    <div className="App">
        <Header/>
        <Main/>
        <Skills/>
        <Projects/>
        <JobOption/>
        <Contacts/>
        <Footer/>
    </div>
  );
}

export default App;
