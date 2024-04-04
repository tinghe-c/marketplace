"use client";

import Image from "next/image";
import $ from "jquery";

const LogoButton = () => {
  const scrollToTop = () => {
    $("#list").scrollTop(0);
  };

  return (
    <Image
      width="24"
      height="24"
      src="/tangerine.png"
      alt="logo"
      onClick={scrollToTop}
      style={{ display: "inline" }}
    ></Image>
  );
};

const searchBar = () => {};

export default LogoButton;
