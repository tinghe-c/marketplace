import React, { useState, useEffect } from "react";
import { ReactTyped } from "react-typed";

const Typewriter = () => (
  <div>
    <ReactTyped
      strings={[
        "Search for products",
        "Search for categories",
        "Search for brands",
      ]}
      typeSpeed={40}
      backSpeed={50}
      attr="placeholder"
      loop
    >
      <input type="text" />
    </ReactTyped>
  </div>
);

export default Typewriter;
