import TodoAddForm from "@/components/todo_add_form";
import TodoList from "@/components/todo_list";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="relative rounded-lg bg-white p-7 shadow-md sm:w-[500px] sm:h-[80vh] h-screen w-screen">
        <h1 className="pb-[1rem] font-extrabold text-3xl">TO DO LIST</h1>

        <TodoAddForm />

        <TodoList />
      </div>
    </div>
  );
}
