import { Dispatch, SetStateAction } from "react";

interface CartToggleProps {
  updateVisible: Dispatch<SetStateAction<boolean>>;
}

export default function CartToggle({ updateVisible }: CartToggleProps) {
  const toggle = () => updateVisible((p) => !p);

  return (
    <div className="pl-1 cursor-pointer" onClick={toggle}>
      <button className="button border px-1">cart</button>
    </div>
  );
}
