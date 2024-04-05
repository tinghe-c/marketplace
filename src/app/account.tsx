import React, { useState } from "react";
import Popup from "reactjs-popup";

export default function Account() {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  let tangerine = (
    <img
      width="18"
      height="18"
      src="/tangerine.png"
      alt="logo"
      style={{ display: "inline" }}
    ></img>
  );

  return (
    <div>
      <button
        type="button"
        className="button border px-1"
        onClick={() => setOpen((open) => !open)}
      >
        account
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
            <p>(Placeholder for an actual account page)</p>
          </div>
        </div>
      </Popup>
    </div>
  );
}
