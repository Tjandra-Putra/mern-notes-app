import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "./ui/badge";

const TodoCard = ({ category, createdDate, title, description }) => {
  return (
    <div>
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex flex-row justify-between items-center mb-4">
          <Badge variant="secondary" className="rounded-full text-xs">
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Badge>

          <p className="text-xs font-medium text-gray-500">{createdDate}</p>
        </div>
        <h2 className="text-sm font-medium leading-tight">{title}</h2>
        <p className="text-xs text-gray-800 mt-2">{description}</p>
        <div className="mt-4 flex justify-end">
          <Button variant="outline" size="sm" className="mr-2">
            Edit
          </Button>
          <Button variant="secondary" size="sm">
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
