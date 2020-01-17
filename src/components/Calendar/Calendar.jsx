import React from "react";
import SchoolActivities from "./SchoolActivities/SchoolActivities"
import UpcomingEvents from "./UpcomingEvents/UpcomingEvents"


function Calendar() {
  return (
    
   <div className="container">
    <SchoolActivities />
    <UpcomingEvents />
          </div>
  );
}
export default Calendar;


