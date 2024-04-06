import LogoButton from "./logo";
import Searchbar from "./searchbar";
import DarkModeToggle from "./darkmode-toggle";
import { Dispatch, SetStateAction } from "react";
import CartToggle from "./cart-toggle";
import Account from "./account";

interface NavbarProps {
  updateCartVisible: Dispatch<SetStateAction<boolean>>;
  updateQuery: Dispatch<SetStateAction<string>>;
}

export default function Navbar({
  updateCartVisible,
  updateQuery,
}: NavbarProps) {
  return (
    <header className="flex items-center justify-between border-b border-slate-500 text-sm p-4">
      <LogoButton />
      <Searchbar updateQuery={updateQuery} />
      <div className="pl-1 pr-3 cursor-pointer">
        <div className="text-xl">🔍</div>
      </div>
      <Account />
      <CartToggle updateVisible={updateCartVisible} />
      <DarkModeToggle />
    </header>
  );
}
