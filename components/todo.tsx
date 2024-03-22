"use client";

import { ITodo, useTodoListStore } from "@/store/useTodoListStore";
import { Checkbox } from "./ui/checkbox";

const Todo = ({ todo }: { todo: ITodo }) => {
  const handleCheckedChange = (checked: boolean) => {
    useTodoListStore.getState().updateTodo({
      ...todo,
      checked: checked,
    });
  };

  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id={`todo_${todo.id}`}
        checked={todo.checked}
        onCheckedChange={handleCheckedChange}
      />
      <label
        htmlFor={`todo_${todo.id}`}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {todo.name}
      </label>
    </div>
  );
};

export default Todo;
