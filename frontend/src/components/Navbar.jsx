import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router";
import { Plus } from "lucide-react";

const Navbar = () => {
  return (
    <header className="dark:bg-gray-950/90">
      <div className="w-full max-w-7xl mx-auto  py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Todos</h1>
            <p className="text-gray-600 mt-1">{/* {completedCount} of {totalCount} tasks completed */}3 of 5 tasks completed</p>
          </div>
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Add Todo
          </Button>
        </div>

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {todos.map((todo) => (
          <TodoCard key={todo.id} todo={todo} onToggleComplete={handleToggleComplete} onDelete={handleDelete} />
        ))}
      </div> */}

        {/* {todos.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No todos yet. Add one to get started!</p>
        </div>
      )} */}
      </div>
    </header>
  );
};

export default Navbar;
