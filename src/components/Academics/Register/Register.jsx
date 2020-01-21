import React from "react";
import AddInfo from "./addInfo";

class Attendance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Addstudent: true,
      // Attendance: 200,
      data: []
    };
    this.onDataChange = this.onDataChange.bind(this);
  }
  onDataChange(data1) {
    if(!data1) {
      return 'Enter valid value to add item'
    }
    this.setState((prevState) => ({
      data: prevState.data.concat(data1)
    }))
  }

  render() {
    console.log(this.state.data)
    return (
      <div class="header">
        <a href="#default" class="logo">
          School Register
        </a>
        <div class="header-right"></div>
        <div>
          <div class="d-md-flex h-md-100 align-items-center">
            <div class="col-md-6 p-0 bg-indigo h-md-100">
              <div class="text-black d-md-flex align-items-center h-50 p-2 text-left justify-content-center">
                <div class="logoarea pt-5 pb-5 col-md-9">
                  <div class="container">
                    <h2>List of Students</h2>
                    {this.state.data.map((student, index) => <h1 key={index}>{student}</h1>)}                  
                  </div>
                </div>
              </div>
            </div>
            <AddInfo handleAddData={this.onDataChange} />
          </div>
        </div>
      </div>
    );
  }
}

export default Attendance;
