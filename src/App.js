import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Register from "./components/Academics/Register/Register"
import About from "./components/About/About";
import Welcome from "./components/Welcome/Welcome";
import Grade from "./components/Grade/Grade";
import StudentsReport from "./components/Grade/StudentsReport/StudentsReport";
import SubjectGrade from "./components/Grade/SubjectGrade/SubjectGrade";
import OurHistory from "./components/About/Ourhistory /OurHistory";
import SchoolProfile from "./components/About/schoolprofile/SchoolProfile";
import Calendar from "./components/Calendar/Calendar"
import UpcomingEvents from "./components/Calendar/UpcomingEvents/UpcomingEvents";
import Academics from "./components/Academics/Academics";
import SchoolActivities from "./components/Calendar/SchoolActivities/SchoolActivities";
import Attendance from "./components/Academics/Attendance/Attendance"
import GeneralReports from "./components/Summary/GeneralReports/GeneralReports"

// import Login from "./components/Login";
// import SignUp from "./components/Signup";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/home" exact component={Home} />
          
          <Route path="/register" exact component={Register} />
          <Route path="/about" exact component={About} />
          <Route path="/welcome" exact component={Welcome} />
          <Route path="/grade" exact component={Grade} />
          <Route path="/studentsreport" exact component={StudentsReport} />
          <Route path="/subjectGrade" exact component={SubjectGrade} />
          <Route path="/ourhistory" exact component={OurHistory} />
          <Route path="/schoolprofile" exact component={SchoolProfile} />
          <Route path="/academics" exact component={Academics} />
          <Route path="/schoolactivities" exact component={SchoolActivities} />
          <Route path="/Calendar" exact component={Calendar} />
          <Route path="/Upcomingevents" exact component={UpcomingEvents} />
          <Route path="/Attendance" exact component={Attendance}/>
          <Route path="/GeneralReports" exact component={GeneralReports}/>
        </Switch>
        {/* <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}> </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
        </div>
      </div> */}
      </div>
    </Router>
  );
}

export default App;
