import { useAtom } from "jotai";
import { todoListAtom } from "./todo_list";
import { Checkbox } from "./ui/checkbox";

export interface ITodo {
  id: number;
  name: string;
  checked: boolean;
}

const Todo = ({ todo }: { todo: ITodo }) => {
  const [, setTodoList] = useAtom(todoListAtom);

  const handleCheckedChange = () => {
    setTodoList((todoList: ITodo[]) =>
      todoList.map((item) => {
        if (item.id === todo.id) {
          return { ...todo, checked: !todo.checked };
        }
        return item;
      })
    );
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
