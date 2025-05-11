import Image from "next/image";
import Link from "next/link";
import BTILogo from "../../../public/img/bti-logo.png";
import { ConnectButton } from "@xellar/kit";

const Navbar = () => {
  return (
    <header className="text-gray-900 bg-gray-100 shadow-md fixed w-full z-50 top-0">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="mr-2">
            <Image
              src={BTILogo}
              width={150}
              height={60}
              alt="BTIFund Logo"
              className="h-10 w-auto"
            />
          </Link>
          <div className="hidden md:flex space-x-4 ml-8">
            <Link href="/" className="px-3 py-2 hover:text-yellow-400">
              Home
            </Link>
            <Link href="/dashboard" className="px-3 py-2 hover:text-yellow-400">
              Dashboard
            </Link>
            <Link
              href="/documentation"
              className="px-3 py-2 hover:text-yellow-400"
            >
              Documentation
            </Link>
            <Link href="/contact" className="px-3 py-2 hover:text-yellow-400">
              Contact
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <ConnectButton />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
