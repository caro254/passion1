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
    src: "/images/building.jpeg",
    altText: "Slide 3",
    caption: "Slide 3",
    header: "Slide 3 Header",
    key: "3"
  }
];

function Home() {
  return (
    <div>
      <UncontrolledCarousel items={items} />; Welcome
    </div>
  );
}
export default Home;
