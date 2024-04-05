import React, { useState } from "react";
import Popup from "reactjs-popup"; //

export default function PopupInfo() {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
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
        <div className="modal bg-slate-500" onClick={closeModal}>
          <p>Placeholder for an actual account page</p>
          <p>Tangerine Marketplace</p>
        </div>
      </Popup>
    </div>
  );
}
