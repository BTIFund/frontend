"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import BTILogo from "../../../../../public/img/bti-logo.png";

export default function DashboardHeader() {
  const [showAccountMenu, setShowAccountMenu] = useState(false);

  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center space-x-4">
        <Image src={BTILogo} alt="BTI Logo" width={40} height={40} />
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
      </div>
      
      <div className="relative">
        <button
          onClick={() => setShowAccountMenu(!showAccountMenu)}
          className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
        >
          <div className="w-10 h-10 bg-gray-200 rounded-full" />
          <span>Account</span>
          <ChevronDown size={16} />
        </button>

        {showAccountMenu && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10 border border-gray-100">
            <div className="py-1">
              <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                Profile
              </Link>
              <Link href="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                Settings
              </Link>
              <hr className="my-1" />
              <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-50">
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}