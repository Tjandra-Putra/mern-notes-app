import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "./ui/badge";
import { formatDateTime } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import axiosInstance from "@/lib/axios";
import { useState } from "react";
import { toast } from "sonner";

const TodoCard = ({ category, createdAt, title, description, id, status, onStatusChange, onDelete }) => {
  const [isDone, setIsDone] = useState(status === "Done");

  const updateStatus = async (checked) => {
    const newStatus = checked ? "Done" : "Draft";

    // optimistic UI
    setIsDone(checked);

    try {
      await axiosInstance.put(`/notes/${id}`, { status: newStatus });
      onStatusChange(id, newStatus); // ← tell parent

      setIsDone(checked);
      toast.success(`Todo marked as ${newStatus.toLowerCase()}`);
    } catch (err) {
      console.error("Error updating status:", err);
      // rollback UI if request fails
      setIsDone(!checked);
      toast.error(`Error updating todo status: ${err.response?.data?.message || "Please try again later"}`);
    }
  };

  const deleteTodo = async () => {
    try {
      await axiosInstance.delete(`/notes/${id}`).then((res) => {
        console.log("Response from server:", res.data.message);
      });
      onDelete(id); // ← tell parent to remove this todo
      toast.success("Todo deleted successfully");
    } catch (err) {
      console.error("Error deleting todo:", err);
      toast.error(`Error deleting todo: ${err.response?.data?.message || "Please try again later"}`);
    }
  };

  return (
    <div>
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex flex-row justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <Checkbox checked={isDone} onCheckedChange={(checked) => updateStatus(checked === true)} className="h-4 w-4" />
            <Badge variant="secondary" className="rounded-full text-xs">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Badge>
          </div>

          <p className="text-xs font-medium text-gray-500">{formatDateTime(createdAt)}</p>
        </div>
        <h2 className="text-sm font-medium leading-tight">{title}</h2>
        <p className="text-xs text-gray-800 mt-2">{description}</p>
        <div className="mt-4 flex justify-end">
          <Button variant="outline" size="sm" className="mr-2" onClick={() => console.log("Edit clicked")}>
            Edit
          </Button>
          <Button variant="secondary" size="sm" onClick={deleteTodo} className="hover:bg-red-500 hover:text-white">
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
