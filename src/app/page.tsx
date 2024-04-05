"use client";

import React, { useState } from "react";
import LogoButton from "./logo";
import ProductList from "./product-list";
import ProductGrid from "./product-grid";
import Typewriter from "./typewriter";
import DarkModeToggle from "./toggle";
import { PopupInfo } from "./popup-info";

const navbar = (
  <header className="flex items-center justify-between border-b border-slate-500 text-sm p-4">
    <LogoButton />
    <Typewriter />
    <div className="pl-1 pr-3">
      <div className="text-xl">🔍</div>
    </div>
    <PopupInfo />
    <div className="pl-1">
      <div className="border px-1">cart</div>
    </div>
    <DarkModeToggle />
  </header>
);

export default function Home() {
  return (
    <div className="flex h-screen flex-col overflow-hidden justify-between">
      {navbar}
      <div className="h-4"></div>
      <main
        id="list"
        className="flex-1 overflow-y-scroll font-mono text-sm px-4 pb-4"
      >
        {/* {ProductList({ url: "https://dummyjson.com/products" })} */}
        <ProductGrid url="https://dummyjson.com/products" />
      </main>
    </div>
  );
}
