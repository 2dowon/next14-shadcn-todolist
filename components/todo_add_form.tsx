"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAtom } from "jotai";
import { useRef } from "react";
import { todoListAtom } from "./todo_list";

const TodoAddForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [, setTodoList] = useAtom(todoListAtom);

  const addTodo = (): void => {
    const name = inputRef.current?.value;

    if (name) {
      setTodoList((todoList) => [
        ...todoList,
        { id: Date.now(), name, checked: false },
      ]);

      inputRef.current.value = "";
    }
  };

  return (
    <div className="flex gap-[1rem]">
      <Input
        ref={inputRef}
        type="text"
        placeholder="Create a new Todo"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTodo();
          }
        }}
      />
      <Button onClick={addTodo}>Add</Button>
    </div>
  );
};

export default TodoAddForm;
