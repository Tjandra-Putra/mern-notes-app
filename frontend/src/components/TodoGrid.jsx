import React from "react";
import TodoCard from "@/components/TodoCard";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router";

const TodoGrid = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-6">
      <section className="flex flex-col rounded-lg border bg-card text-card-foreground bg-red-50 ">
        <header className="px-4 py-2 border-b text-sm font-semibold">
          <Badge className="bg-red-700">To-do</Badge>
        </header>
        <div className="flex flex-col gap-2 p-4 overflow-y-auto max-h-[calc(100vh-12rem)]">
          {data
            .filter((item) => item.status === "Todo")
            .map((item) => (
              <Link key={item._id} to={`/note/${item._id}`}>
                <TodoCard key={item._id} category={item.category} createdAt={item.createdAt} title={item.title} description={item.description} />
              </Link>
            ))}
        </div>
      </section>

      <section className="flex flex-col rounded-lg border bg-card text-card-foreground bg-yellow-50">
        <header className="px-4 py-2 border-b text-sm font-semibold">
          <Badge className="bg-yellow-700">Doing</Badge>
        </header>
        <div className="flex flex-col gap-2 p-4 overflow-y-auto max-h-[calc(100vh-12rem)]">
          {data
            .filter((item) => item.status === "Doing")
            .map((item) => (
              <Link key={item._id} to={`/note/${item._id}`}>
                <TodoCard key={item._id} category={item.category} createdAt={item.createdAt} title={item.title} description={item.description} />
              </Link>
            ))}
        </div>
      </section>

      <section className="flex flex-col rounded-lg border bg-card text-card-foreground bg-green-50">
        <header className="px-4 py-2 border-b text-sm font-semibold">
          <Badge className="bg-green-700">Done</Badge>
        </header>
        <div className="flex flex-col gap-2 p-4 overflow-y-auto max-h-[calc(100vh-12rem)]">
          {data
            .filter((item) => item.status === "Done")
            .map((item) => (
              <Link key={item._id} to={`/note/${item._id}`}>
                <TodoCard key={item._id} category={item.category} createdAt={item.createdAt} title={item.title} description={item.description} />
              </Link>
            ))}
        </div>
      </section>

      <section className="flex flex-col rounded-lg border bg-card text-card-foreground bg-blue-50">
        <header className="px-4 py-2 border-b text-sm font-semibold">
          <Badge className="bg-blue-700">Draft</Badge>
        </header>
        <div className="flex flex-col gap-2 p-4 overflow-y-auto max-h-[calc(100vh-12rem)]">
          {data
            .filter((item) => item.status === "Draft")
            .map((item) => (
              <Link key={item._id} to={`/note/${item._id}`}>
                <TodoCard key={item._id} category={item.category} createdAt={item.createdAt} title={item.title} description={item.description} />
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
};

export default TodoGrid;
