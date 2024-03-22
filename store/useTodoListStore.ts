import { create } from "zustand";

const myTodoList = [
  { id: 1, name: "hello", checked: false },
  { id: 2, name: "next.js 14", checked: false },
  { id: 3, name: "shadcn/ui", checked: false },
  {
    id: 4,
    name: "Forms are tricky. They are one of the most common things you'll build in a web application, but also one of the most complex.",
    checked: false,
  },
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
  deleteTodo: (id: number) => void;
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
        return todo.id === newTodo.id ? newTodo : todo;
      }),
    })),
  deleteTodo: (id: number) =>
    set((state) => ({
      todoList: state.todoList.filter((todo) => todo.id !== id),
    })),
}));

export { useTodoListStore };
export type { ITodo, ITodoListStore };
