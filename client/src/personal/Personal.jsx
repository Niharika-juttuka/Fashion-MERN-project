import React from "react";
import Navbar1 from "../Navbar1/Navbar1";  // Assuming Navbar1 is in the same directory

function first() {
  return (
    <div>
      <Navbar1 />
      <div className="container-fluid">
        {/* Content of the container can go here */}
      </div>
    </div>
  );
}

export default first;
