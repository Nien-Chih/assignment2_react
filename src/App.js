import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Login from "./components/login";
import Semester from "./components/semester";
import Student from "./components/student"
import Lecturer from "./components/lecturer"
import Course from "./components/course"
import Classes from "./components/classes"
import Collegedays from "./components/collegedays";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="login" element={ <Login/> } />
          <Route path="semester" element={ <Semester/> } />
          <Route path="course" element={ <Course/> } />
        <Route path="student" element={ <Student/> } />
        <Route path="lecturer" element={ <Lecturer/> } />
          <Route path="classes" element={ <Classes/> } />
          <Route path="collegedays" element={ <Collegedays/> } />
      </Routes>
    </div>
  );
}

export default App;
