import React from "react";

function SchoolProfile() {
  return (
    <div>
      <div class="d-md-flex h-md-100 align-items-center">
        <div class="col-md-6 p-0 bg-indigo h-md-100">
          <div class="text-black d-md-flex align-items-center h-50 p-2 text-left justify-content-center">
            <div class="logoarea pt-5 pb-5 col-md-9">
            <div class="container">
            </div>

            <div className="img">
            <h2>School Overview</h2>
  
             
           
            <p>
              Mizizi Academy is a private Catholic Mixed Day School run by
              private partners . The school is open to boys and girls of
              all races regardless of their religion.</p>
              
             
          
            <img 
                src="/images/nurseryb.jpeg"
                class="img-responsive"
                width="400px"
                height="200px"
              />
              </div>
       <h2>Nursery</h2>
       <p> It has a nursery composed
    
      <ul>
      <li>Baby class</li>
      <li>Intermediate</li> 
      <li>Pre-unit</li> 
      </ul>
      </p>
              <img
                src="/images/nursery.jpeg"
                class="img-responsive"
                width="400px"
                height="200px"
              />
   </div>
          </div>
        </div>
        <div className="row profile-section" align="left">
          <div className="col profile-img">
            <div className="profile-items">
              <div className="cont">
         <h2>Primary</h2>
          <p>Primary school section
              divided into lower and upper and a High school. The school follows
              the Kenya national curriculum and admits all students who qualify
              or pass the intake exams.</p>

              <img
                src="/images/cheers.jpeg"
                class="img-responsive"
                width="600px"
                height="400px"
              />
              </div>
             </div>
        </div>
      </div>
    </div>
    </div>
  );
}
export default SchoolProfile;
