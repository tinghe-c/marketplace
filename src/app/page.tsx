import Image from "next/image";

// const logo = (

// );

const navbar = (
  <div className="flex items-center justify-between font-mono text-sm">
    <div>
      <Image width="24" height="24" src="/tangerine.png" alt="logo"></Image>
    </div>
    <div className="w-full border-2 border-rose-500">searchbar</div>
    <div className="border-2 border-white">dark</div>
    <div className="border-2 border-white">account</div>
    <div className="border-2 border-white">cart</div>
  </div>
);

export default function Home() {
  return (
    <main className="min-h-screen flex-col items-center justify-between p-5">
      {navbar}
      <div className="font-mono text-sm">
        <a
          href="https://www.flaticon.com/free-icons/tangerine"
          title="tangerine icons"
        >
          Tangerine icons created by Freepik - Flaticon
        </a>
      </div>
    </main>
  );
}
