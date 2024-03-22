"use client";

import { ITodo, useTodoListStore } from "@/store/useTodoListStore";
import { Button } from "../../../components/ui/button";
import { Checkbox } from "../../../components/ui/checkbox";

const Todo = ({ todo }: { todo: ITodo }) => {
  const handleCheckedChange = (checked: boolean) => {
    useTodoListStore.getState().updateTodo({
      ...todo,
      checked: checked,
    });
  };

  const handleDeleteButtonClick = () => {
    useTodoListStore.getState().deleteTodo(todo.id);
  };

  return (
    <div className="flex items-center justify-between">
      <div className="space-x-2 flex">
        <Checkbox
          id={`todo_${todo.id}`}
          checked={todo.checked}
          onCheckedChange={handleCheckedChange}
        />
        <label
          htmlFor={`todo_${todo.id}`}
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block break-words sm:w-[24rem] w-[calc(100vw-7rem)]"
        >
          {todo.name}
        </label>
      </div>

      <Button
        type="button"
        variant="ghost"
        className="w-0 h-0 p-2"
        onClick={handleDeleteButtonClick}
      >
        ❌
      </Button>
    </div>
  );
};

export default Todo;
