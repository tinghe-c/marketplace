"use client";

import React, { useState } from "react";
import LogoButton from "./header";
import ProductList from "./product-list";
import Typewriter from "./typewriter";
import ReactTyped from "react-typed";

const navbar = (
  <header className="flex items-center justify-between font-mono text-sm">
    <div>{LogoButton()}</div>
    {Typewriter()}
    <div className="border-2 border-white">dark</div>
    <div className="border-2 border-white">account</div>
    <div className="border-2 border-white">cart</div>
  </header>
);

export default function Home() {
  return (
    <div className="flex h-screen flex-col overflow-hidden justify-between p-5">
      {navbar}
      <main id="list" className="flex-1 overflow-y-scroll font-mono text-sm">
        {ProductList({ url: "https://dummyjson.com/products" })}
      </main>
    </div>
  );
}
