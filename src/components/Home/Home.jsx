import React from "react";

import { UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src: "/images/720843.jpg",
    altText: "Slide 1",
    caption: "Slide 1",
    header: "Slide 1 Header",
    key: "1"
  },
  {
    src: "/images/Primary.jpg",
    altText: "Slide 2",
    caption: "Slide 2",
    header: "Slide 2 Header",
    key: "2"
  },
  {
    src: "/images/March8.jpg",
    altText: "Slide 3",
    caption: "Slide 3",
    header: "Slide 3 Header",
    key: "3"
  },
  
];

function Home() {
  return (
    <div>
      <UncontrolledCarousel items={items}  />

      <div className="home">
      <div className="text-alignment">
        <div className="about-text">
         
        
         

        <div className="welcome">
      <div className="text-alignment">
        <div className="about-text">
       <div className="message" > We at Mizizi Academy believe we are the Best school Lake Region.</div>
       
       <div className="message2"> We daily endeavour to be the leading and most prefered school </div>


<div className=" additional" > 
 We are commited to making sure that when everyone stands up we will stand out, when everyone stand out we will be outstanding,
 and when everyone is outstanding we will be the standard measure.</div>
              
</div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
}
export default Home;
