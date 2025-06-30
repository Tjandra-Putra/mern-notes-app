import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <header className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-bold text-white">My Notes App</h1>
          <Button variant="outline">
            <Link to="/create">Create Note</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
