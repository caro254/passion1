import React, { useState } from "react";

import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

function Navbar() {
  const [dropdownOpen, setOpen] = useState(false);
  const [academicsOpen, setAcademicsOpen] = useState(false);
  const [gradeOpen, setGradeOpen] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [summaryOpen, setSummaryOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);
  const academicsToggle = () => setAcademicsOpen(!academicsOpen);
  const gradeToggle = () => setGradeOpen(!gradeOpen);
  const calendarToggle = () => setCalendarOpen(!calendarOpen);
  const summaryToggle = () => setSummaryOpen(!calendarOpen);
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
        id="ftco-navbar"
      >
        <div className="logo">
         
          <h4 className="heading2">Mizizi Academy </h4>
        </div>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a href="/home" className="nav-link">
              Home
            </a>
          </li>
          <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>About</DropdownToggle>
            <DropdownMenu>
              <a className="nav-link" href="/SchoolProfile">
                <DropdownItem>School Profile</DropdownItem>
              </a>

              <a className="nav-link" href="/OurHistory">
                <DropdownItem>Our History</DropdownItem>
              </a>
            </DropdownMenu>
          </ButtonDropdown>

          <ButtonDropdown isOpen={academicsOpen} toggle={academicsToggle}>
            <DropdownToggle caret>Academics</DropdownToggle>
            <DropdownMenu>
              <a className="nav-link" href="/Register">
                <DropdownItem>Register</DropdownItem>
              </a>

              <a className="nav-link" href="/Attendance">
                <DropdownItem>Attendance</DropdownItem>
              </a>
            </DropdownMenu>
          </ButtonDropdown>

          <ButtonDropdown isOpen={gradeOpen} toggle={gradeToggle}>
            <DropdownToggle caret>Grades</DropdownToggle>
            <DropdownMenu>
              <a className="nav-link" href="/StudentsReport">
                <DropdownItem>StudentsReport</DropdownItem>
              </a>

              <a className="nav-link" href="/SubjectGrade">
                <DropdownItem>SubjectGrade</DropdownItem>
              </a>
            </DropdownMenu>
          </ButtonDropdown>

          <ButtonDropdown isOpen={calendarOpen} toggle={calendarToggle}>
            <DropdownToggle caret>Calendar</DropdownToggle>
            <DropdownMenu>
              <a className="nav-link" href="/SchoolActivities">
                <DropdownItem>School Activities</DropdownItem>
              </a>

              <a className="nav-link" href="/UpcomingEvents">
                <DropdownItem>Upcoming Events</DropdownItem>
              </a>
            </DropdownMenu>
          </ButtonDropdown>
          <ButtonDropdown isOpen={summaryOpen} toggle={summaryToggle}>
            <DropdownToggle caret>Summary</DropdownToggle>
            <DropdownMenu>
              <a className="nav-link" href="GeneralReports">
                <DropdownItem>GeneralReports</DropdownItem>
              </a>
            </DropdownMenu>
          </ButtonDropdown>
          
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
