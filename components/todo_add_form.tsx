"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useTodoListStore } from "@/store/useTodoListStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

const todoSchema = z.object({
  name: z.string(),
});

const TodoAddForm = () => {
  const form = useForm<z.infer<typeof todoSchema>>({
    resolver: zodResolver(todoSchema),
    defaultValues: { name: "" },
  });

  const onSubmit = (values: z.infer<typeof todoSchema>) => {
    useTodoListStore.getState().addTodo({
      id: Date.now(),
      name: values.name,
      checked: false,
    });
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-[1rem]">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input placeholder="Create a new Todo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Add</Button>
      </form>
    </Form>
  );
};

export default TodoAddForm;
