import React from "react";

import { RefreshCcw } from "lucide-react";

const Navbar = () => {
  return (
    <header className="dark:bg-gray-950/90">
      <div className="w-full py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Todos</h1>
            <p className="text-gray-600 mt-1">{/* {completedCount} of {totalCount} tasks completed */}3 of 5 tasks completed</p>
          </div>

          <div className="flex justify-end items-center gap-4">
            {/* <AddToDo /> */}

            {/* Refresh Button */}
            <div
              variant="outline"
              className="flex items-center gap-2 rounded bg-gray-600 px-4 py-2 text-white transition-colors hover:bg-gray-700 cursor-pointer h-10"
              onClick={() => {
                window.location.reload();
              }}
            >
              <RefreshCcw className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
