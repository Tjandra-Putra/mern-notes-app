import React, { useState } from "react";
import { RefreshCcw } from "lucide-react";
import axiosInstance from "@/lib/axios";

const Navbar = () => {
  const [totalCount, setTotalCount] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);

  useState(() => {
    // get total notes count
    const fetchNotesCount = async () => {
      try {
        const response = await axiosInstance.get("/notes");

        console.log("Response from server:", response.data.length);
        setTotalCount(response.data.length);

        // Get status equals to Done
        const completedNotes = response.data.filter((note) => note.status === "Done");
        setCompletedCount(completedNotes.length);
      } catch (error) {
        console.error("Error fetching notes count:", error);
      }
    };

    fetchNotesCount();
  }, []);

  return (
    <header className="dark:bg-gray-950/90">
      <div className="w-full pt-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Todos</h1>
            <p className="text-gray-600 mt-1">
              {/* {completedCount} of {totalCount} tasks completed */}
              {completedCount} of {totalCount} tasks completed
            </p>
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
