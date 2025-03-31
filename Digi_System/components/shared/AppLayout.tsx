"use client";

import Link from "next/link";
import { SignOutButton } from "@clerk/nextjs";
import { AiFillHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdUpload } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { BsMusicNote } from "react-icons/bs";
import { useState, useEffect } from "react";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Handle responsive sidebar
  useEffect(() => {
    const handleResize = () => {
      setIsCollapsed(window.innerWidth < 768);
    };

    // Set initial state
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className={`${isCollapsed ? 'w-16' : 'w-64'} border-r bg-white transition-all duration-300`}>
        <div className="flex flex-col h-full p-4">
          <div className={`font-bold mb-6 flex items-center ${isCollapsed ? 'justify-center' : ''}`}>
            {isCollapsed ? (
              <span className="text-2xl"><BsMusicNote /></span>
            ) : (
              <div className="text-2xl flex items-center gap-2">
                <span className="text-2xl"><BsMusicNote /></span>
                <span>TikMusic</span>
              </div>
            )}
          </div>
          
          <nav className="space-y-4">
            <Link 
              href="/feed" 
              className="flex items-center p-2 hover:bg-gray-100 rounded"
            >
              <span className="text-xl"><AiFillHome /></span>
              {!isCollapsed && <span className="ml-2">Feed</span>}
            </Link>
            
            <Link 
              href="/profile" 
              className="flex items-center p-2 hover:bg-gray-100 rounded"
            >
              <span className="text-xl"><CgProfile /></span>
              {!isCollapsed && <span className="ml-2">Profile</span>}
            </Link>
            
            <Link 
              href="/upload" 
              className="flex items-center p-2 hover:bg-gray-100 rounded"
            >
              <span className="text-xl"><MdUpload /></span>
              {!isCollapsed && <span className="ml-2">Upload</span>}
            </Link>
            
            <SignOutButton>
              <button className="flex items-center w-full p-2 hover:bg-gray-100 rounded">
                <span className="text-xl"><BiLogOut /></span>
                {!isCollapsed && <span className="ml-2">Sign Out</span>}
              </button>
            </SignOutButton>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
} 