import Link from "next/link";
import { ModeToggle } from "./mode";

const Header = () => {
  return (
    <div className="w-full flex items-center justify-center p-3 text-[white]  bg-red-500">
      <ul className="flex items-center gap-6">
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>about</Link>
        <Link href={"/blog"}>blog</Link>
        <Link href={"/contact"}>contact</Link>
        <Link href={"/login"}>Login</Link>
        <ModeToggle />
      </ul>
    </div>
  );
};

export default Header;
