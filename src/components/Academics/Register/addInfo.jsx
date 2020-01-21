import React from 'react';

export default class AddInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        //   Addstudent: true,
        //   Attendance: 200,
        //   data: [],
        error: undefined
        };
        this.onDataChange = this.onDataChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
      }
      onDataChange(e) {
        e.preventDefault()
        const info = {[e.target.name]: e.target.value}
        // const info = e.target.elements.firstname.lastname.value;
        const error = this.props.handleAddData(info);
        
        this.setState(() => ({ error }));
      }
    
      handleInputChange(event) {
        const target = event.target;
        const value = target.type === "button" ? target.active : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }
    render() {
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.onDataChange}>
              <h1>Update Register</h1>
              <label>Add Student</label>
              <br />
              <label>
                Name
                <input
                  name="firstname"
                  placeholder="first name"
                  //value={this.state.numberofstudents}
                  onChange={this.handleInputChange}
                />
                <input
                  name="lastname"
                  placeholder="last name"
                  //value={this.state.numberofstudents}
                  onChange={this.handleInputChange}
                />
              </label>
              <br />

              {/* <label>
                {" "}
                Add to Class
                <select name="class">
                  <option value="clas">Select</option>
                  <option value="clas">Nursery</option>
                  <option value="class">Class 2</option>
                  <option value="class">Class 3</option>
                  <option value="class">Class 4</option>
                </select>
                <input
                  //value={this.state.numberofstudents}
                  onChange={this.handleInputChange}
                />
                <br />
              </label> */}
              <button>Add student</button>
            </form>
            </div>
        )
    }
}