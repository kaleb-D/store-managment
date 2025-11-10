import React from "react";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, Settings, Settings2, Store, User } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();
  return (
    <header className=" border-base-300 fixed w-full top-0 z-40 backdrop-blur-sm bg-base-100/50 p-2">
      <div className="container mx-auto px-auto h-7">
        <div className=" w-full p-2 flex items-center justify-between h-full">
          <div className="left flex flex-row gap-8">
            <Link
              to="/"
              className="flex items-center gap-2 hover:opacity-80 transition-all"
            >
              <Store className="size-6 text-primary " />

              <h1 className="">Store Mangement System</h1>
            </Link>
          </div>

          <div className="right flex flex-row items-center gap-8 ">
            {authUser && (
              <>
                <Link
                  onClick={logout}
                  to="/logout"
                  className=" flex flex-row items-center gap-2 hover:opacity-80 transition-all"
                >
                  <LogOut className="size-5 text-primary " />
                  <span className="hidden sm:inline">Log Out</span>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
