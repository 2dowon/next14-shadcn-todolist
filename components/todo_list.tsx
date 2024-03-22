"use client";

import { ITodo, useTodoListStore } from "@/store/useTodoListStore";
import Todo from "./todo";

const TodoList = () => {
  const todoList = useTodoListStore().todoList;

  return (
    <ul className="py-[1rem] space-y-[0.5rem]">
      {todoList.map((todo: ITodo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
