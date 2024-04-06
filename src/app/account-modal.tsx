import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Popup from "reactjs-popup";
import { Account, apiBaseUrl, userId } from "./api";
import Image from "next/image";

export default function AccountModal() {
  const [open, updateOpen] = useState(false);
  const [account, updateAccount] = useState(undefined as unknown as Account);
  const closeModal = () => updateOpen((_) => false);

  useEffect(() => {
    fetch(`${apiBaseUrl}/users/${userId}`)
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then((data) => {
        updateAccount((_) => data);
      });
  }, []);

  let tangerine = (
    <Image
      width="18"
      height="18"
      src="/tangerine.png"
      alt="logo"
      style={{ display: "inline" }}
    ></Image>
  );

  return account === undefined ? (
    <div></div>
  ) : (
    <div>
      <button
        type="button"
        className="button border px-1"
        onClick={() => updateOpen((open) => !open)}
      >
        account
      </button>
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="popup-container" onClick={closeModal}>
          <div className="popup">
            <Image
              className="inline"
              src={account.image}
              alt={`${account.username}'s profile picture`}
              width={100}
              height={100}
            />
            <p>
              {tangerine}
              <span className="px-5">{account.username}</span>
              {tangerine}
              <br />
              <br />
            </p>
            <p>
              {account.firstName} {account.lastName}
            </p>
            <p>
              <a className="underline" href={`mailto:${account.email}`}>
                {account.email.replaceAll("@", " AT ").replaceAll(".", " DOT ")}
              </a>
            </p>
          </div>
        </div>
      </Popup>
    </div>
  );
}
