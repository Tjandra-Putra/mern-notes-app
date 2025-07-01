import React from "react";
import TodoCard from "@/components/TodoCard";
import { Badge } from "@/components/ui/badge";
import AddToDo from "@/components/AddToDo";

const COLUMNS = [
  { key: "Draft", label: "Draft", bg: "bg-gray-50", badge: "bg-gray-700" },
  { key: "Todo", label: "To‑do", bg: "bg-red-50", badge: "bg-red-700" },
  { key: "Doing", label: "Doing", bg: "bg-yellow-50", badge: "bg-yellow-700" },
  { key: "Done", label: "Done", bg: "bg-green-50", badge: "bg-green-700" },
];

const sortByNewest = (a, b) => new Date(b.createdAt) - new Date(a.createdAt);

export default function TodoGrid({ data = [], onStatusChange, onDelete, onAddNote }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {COLUMNS.map(({ key, label, bg, badge }) => {
        const items = data.filter((i) => i.status === key).sort(sortByNewest);

        return (
          <section key={key} className={`flex flex-col rounded-lg border bg-card text-card-foreground ${bg}`}>
            <header className="border-b px-4 py-2 text-sm font-semibold flex items-center justify-between">
              <Badge className={badge}>{label}</Badge>

              {/* Add Todo Button */}
              <AddToDo status={key} onNewNoteChange={onAddNote} />
            </header>

            {/* scroll area */}
            <div className="flex flex-col gap-4 overflow-y-auto p-4 max-h-[calc(100vh-12rem)]">
              {items.length === 0 ? (
                <p className="text-xs text-gray-500 italic self-center">No items in this column</p>
              ) : (
                items.map((item) => <TodoCard key={item._id} {...item} onStatusChange={onStatusChange} onDelete={onDelete} />)
              )}
            </div>
          </section>
        );
      })}
    </div>
  );
}
