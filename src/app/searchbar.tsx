import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import { ReactTyped } from "react-typed";

interface SearchbarProps {
  updateQuery: Dispatch<SetStateAction<string>>;
}

const Searchbar = ({ updateQuery }: SearchbarProps) => (
  <div className="w-full pl-3">
    <ReactTyped
      strings={["Search for products", "Search for categories"]}
      typeSpeed={40}
      backSpeed={50}
      attr="placeholder"
      loop
    >
      <input
        className="w-full border px-1"
        type="text"
        onChange={(e) => {
          updateQuery((_) => e.target.value);
        }}
      />
    </ReactTyped>
  </div>
);

export default Searchbar;
