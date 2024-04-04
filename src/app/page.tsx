"use client";

import Image from "next/image";
import $ from "jquery";
import React, { useState } from "react";
import LogoButton from "./header";

const searchBar = () => {};

const navbar = (
  <header className="flex items-center justify-between font-mono text-sm">
    <div>{LogoButton()}</div>
    <div className="w-full border-2 border-rose-500">searchbar</div>
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
        <div className="min-h-screen">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            quos dignissimos doloremque enim necessitatibus accusamus dolorum
            aperiam, at tempora vel?
          </p>
        </div>
        <div className="min-h-screen">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            quos dignissimos doloremque enim necessitatibus accusamus dolorum
            aperiam, at tempora vel?
          </p>
        </div>
        <div className="min-h-screen">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            quos dignissimos doloremque enim necessitatibus accusamus dolorum
            aperiam, at tempora vel?
          </p>
        </div>
        <div className="min-h-screen">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            quos dignissimos doloremque enim necessitatibus accusamus dolorum
            aperiam, at tempora vel?
          </p>
        </div>
        <div className="min-h-screen">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            quos dignissimos doloremque enim necessitatibus accusamus dolorum
            aperiam, at tempora vel?
          </p>
        </div>
        <div className="min-h-screen">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            quos dignissimos doloremque enim necessitatibus accusamus dolorum
            aperiam, at tempora vel?
          </p>
        </div>
        <a
          href="https://www.flaticon.com/free-icons/tangerine"
          title="tangerine icons"
        >
          Tangerine icons created by Freepik - Flaticon
        </a>
      </main>
    </div>
  );
}
