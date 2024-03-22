import { ShoppingListTable } from "./_components/shopping_list_table";

export default function ShoppingEditableListPage() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="relative rounded-lg bg-white p-7 shadow-md sm:w-[1000px] sm:h-[80vh] h-screen w-screen">
        <h1 className="pb-[1rem] font-extrabold text-3xl">
          SHOPPING EDITABLE LIST
        </h1>

        <ShoppingListTable />
      </div>
    </div>
  );
}
