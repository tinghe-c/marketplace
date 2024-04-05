import LogoButton from "./logo";
import Typewriter from "./typewriter";
import PopupInfo from "./popup-info";
import DarkModeToggle from "./toggle";
import { Dispatch, SetStateAction } from "react";
import CartToggle from "./cart-toggle";

interface NavbarProps {
  updateCartVisible: Dispatch<SetStateAction<boolean>>;
}

export default function Navbar({ updateCartVisible }: NavbarProps) {
  return (
    <header className="flex items-center justify-between border-b border-slate-500 text-sm p-4">
      <LogoButton />
      <Typewriter />
      <div className="pl-1 pr-3 cursor-pointer">
        <div className="text-xl">🔍</div>
      </div>
      <PopupInfo />
      <CartToggle updateVisible={updateCartVisible} />
      <DarkModeToggle />
    </header>
  );
}
