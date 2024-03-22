"use client";

import { atom } from "jotai";
import { useAtomValue } from "jotai/react";
import Todo, { ITodo } from "./todo";

export const todoListAtom = atom<ITodo[]>([
  { id: 1, name: "hello", checked: false },
  { id: 2, name: "shadcn", checked: false },
]);

const TodoList = () => {
  const todoList = useAtomValue(todoListAtom);

  return (
    <ul className="py-[1rem] space-y-[0.5rem]">
      {todoList.map((todo: ITodo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
