import React, { useState } from "react";
import Calendar from "react-calendar";

function Attendance() {
  const [date, setDate] = useState(new Date());
  const handleChange = date => setDate(date);
  console.log(date);
  const handleSearch = e => {
    e.preventDefault();
  };

  return (
    <div className="row attendance-wrapper " >
      <div className="col-md-6" >
        <Calendar onChange={handleChange} value={date} />
      </div>
      <div className="col-md-6 " >
        <div className="col-md-11 attendance ">
          <div className="row containers bg-secondary ">
            <h5>Attendance For </h5>
            <input type="text" name="search" onChange={handleSearch} />
          </div>

          <div className="row containers">
            <div className="col-sm-2">
              <button className="btn btn-info" type="button">
                Present
              </button>
            </div>
            <div className="col-sm-2">
              <button className="btn btn-secondary" type="button">
                Absent
              </button>
            </div>
            <div className="col-sm-2">
              <button className="btn btn-secondary" type="button">
                Tardy
              </button>
            </div>
            <br/>
    
          </div>
          <div style={{float:"right"}}>
              <button className="btn btn-success" type="button">
                Save
              </button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Attendance;
