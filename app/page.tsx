import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="relative rounded-lg bg-white p-7 shadow-md sm:w-[500px] sm:h-[80vh] h-screen w-screen">
        <h1 className="pb-[2rem] font-extrabold text-3xl">MY LIST</h1>

        <div className="flex flex-col gap-y-[1rem]">
          <Link href="/todo-list">
            <Button type="button">TODO LIST</Button>
          </Link>
          <Link href="/shopping-list-view">
            <Button type="button">SHOPPING LIST VIEW</Button>
          </Link>
          <Link href="/shopping-editable-list">
            <Button type="button">SHOPPING EDITABLE LIST</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
