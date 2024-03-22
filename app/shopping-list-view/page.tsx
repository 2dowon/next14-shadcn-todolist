import ShoppingListView from "./_components/shopping_list_view";

export default function ShoppingListViewPage() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="relative rounded-lg bg-white p-7 shadow-md sm:w-[500px] sm:h-[80vh] h-screen w-screen">
        <h1 className="pb-[1rem] font-extrabold text-3xl">
          SHOPPING LIST VIEW
        </h1>

        <ShoppingListView />
      </div>
    </div>
  );
}
