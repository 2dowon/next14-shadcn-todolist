"use client";

import { ITodo, useTodoListStore } from "@/store/useTodoListStore";
import Todo from "./todo";

const TodoList = () => {
  const todoList = useTodoListStore().todoList;

  return (
    <ul className="mt-[1rem] sm:mt-[2rem] space-y-4 overflow-y-scroll sm:h-[calc(80vh-11rem)] h-[calc(100vh-11rem)] scrollbar-hide">
      {todoList.map((todo: ITodo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
