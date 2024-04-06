import Image from "next/image";
import React, { useState } from "react";
import Popup from "reactjs-popup";

export default function CheckoutPopup() {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  let tangerine = (
    <Image
      width="18"
      height="18"
      src="/tangerine.png"
      alt="logo"
      style={{ display: "inline" }}
    ></Image>
  );

  return (
    <span>
      <button
        type="button"
        className="button checkout float-right"
        onClick={() => setOpen((open) => !open)}
      >
        Checkout
      </button>
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="popup-container" onClick={closeModal}>
          <div className="popup">
            <p>
              {tangerine}
              <span className="px-5">Tangerine Marketplace</span>
              {tangerine}
              <br></br>
              <br></br>
            </p>
            <p>By Ting He</p>
            <p>
              <a className="underline" href="mailto:tinghe@umich.edu">
                tinghe AT umich DOT edu
              </a>
            </p>
            <br></br>
            <p>(Placeholder for an actual checkout page)</p>
          </div>
        </div>
      </Popup>
    </span>
  );
}
