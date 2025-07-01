import React from "react";

import AddToDo from "@/components/AddToDo";

const Navbar = () => {
  return (
    <header className="dark:bg-gray-950/90">
      <div className="w-full max-w-7xl mx-auto  py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Todos</h1>
            <p className="text-gray-600 mt-1">{/* {completedCount} of {totalCount} tasks completed */}3 of 5 tasks completed</p>
          </div>

          <AddToDo />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
