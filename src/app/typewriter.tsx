import React, { useState, useEffect } from "react";
import { ReactTyped } from "react-typed";

const Typewriter = () => (
  <div className="w-full pl-3">
    <ReactTyped
      strings={["Search for products", "Search for categories"]}
      typeSpeed={40}
      backSpeed={50}
      attr="placeholder"
      loop
    >
      <input className="w-full border px-1" type="text" />
    </ReactTyped>
  </div>
);

export default Typewriter;
