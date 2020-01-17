import React, { useState } from "react";
import logo from "../../image2/logo.png";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

function Navbar() {
  const [dropdownOpen, setOpen] = useState(false);
  const [academicsOpen, setAcademicsOpen] = useState(false);
  const [schoolOpen, setSchoolOpen] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);
  const academicsToggle = () => setAcademicsOpen(!academicsOpen);
  const schoolToggle = () => setSchoolOpen(!schoolOpen);
  const calendarToggle = () => setCalendarOpen(!calendarOpen);
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
        id="ftco-navbar"
      >
        <div className="logo">
          <img src={logo} alt="" />
          <h4 className="heading2">Mizizi Academy School</h4>
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
              <a className="nav-link" href="/Performance">
                <DropdownItem>Performance</DropdownItem>
              </a>

              <a className="nav-link" href="/Kcse">
                <DropdownItem>Kcse</DropdownItem>
              </a>
            </DropdownMenu>
          </ButtonDropdown>

          <ButtonDropdown isOpen={schoolOpen} toggle={schoolToggle}>
            <DropdownToggle caret>The School</DropdownToggle>
            <DropdownMenu>
              <a className="nav-link" href="/Nursery">
                <DropdownItem>Nursery</DropdownItem>
              </a>

              <a className="nav-link" href="/Primary">
                <DropdownItem>Primary</DropdownItem>
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
          <li className="nav-item">
            <a href="/Register" className="nav-link">
              Register
            </a>
          </li>
          <li className="nav-item">
            <a href="/login" className="nav-link">
              Login
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
