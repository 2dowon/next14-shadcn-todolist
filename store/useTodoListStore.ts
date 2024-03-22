import { create } from "zustand";

const myTodoList = [
  { id: 1, name: "hello", checked: false },
  { id: 2, name: "next.js 14", checked: false },
  { id: 3, name: "shadcn/ui", checked: false },
] as ITodo[];

interface ITodo {
  id: number;
  name: string;
  checked: boolean;
}

interface ITodoListStore {
  todoList: ITodo[];
  addTodo: (todo: ITodo) => void;
  updateTodo: (todo: ITodo) => void;
}

const useTodoListStore = create<ITodoListStore>((set) => ({
  todoList: myTodoList,
  addTodo: (todo: ITodo) =>
    set((state) => ({
      todoList: [...state.todoList, todo],
    })),
  updateTodo: (newTodo: ITodo) =>
    set((state) => ({
      todoList: state.todoList.map((todo) => {
        if (todo.id === newTodo.id) {
          return newTodo;
        } else {
          return todo;
        }
      }),
    })),
}));

export { useTodoListStore };
export type { ITodo, ITodoListStore };
