import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="relative rounded-lg bg-white p-7 shadow-md h-[80vh] w-[500px]">
        <h1 className="pb-[1rem] font-extrabold text-3xl">TO DO LIST</h1>

        <div className="flex gap-[1rem]">
          <Input placeholder="typing todo" />
          <Button>Add</Button>
        </div>
      </div>
    </div>
  );
}
