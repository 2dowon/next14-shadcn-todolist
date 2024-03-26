import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  IShoppingItem,
  useShoppingListStore,
} from "@/store/useShoppingListStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

const shoppingItemSchema = z.object({
  category: z.string(),
  modelName: z.string(),
  price: z.coerce.number(),
});

const ShoppingItemDialog = ({
  triggerButton,
  shoppingItem,
}: {
  triggerButton: JSX.Element;
  shoppingItem?: IShoppingItem;
}) => {
  const isAddingShoppingItemDialog = shoppingItem == null;

  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof shoppingItemSchema>>({
    resolver: zodResolver(shoppingItemSchema),
    defaultValues: {
      category: shoppingItem?.category,
      modelName: shoppingItem?.modelName,
      price: shoppingItem?.price,
    },
  });
  const { reset } = form;
  const { isSubmitSuccessful, isSubmitting } = form.formState;

  const onSubmit = async (values: z.infer<typeof shoppingItemSchema>) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (isAddingShoppingItemDialog) {
      useShoppingListStore.getState().addShoppingItem({
        id: Date.now(),
        category: values.category,
        modelName: values.modelName,
        price: values.price,
      });
    } else {
      useShoppingListStore.getState().updateShoppingItem({
        id: shoppingItem.id,
        category: values.category,
        modelName: values.modelName,
        price: values.price,
      });
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      setOpen(false);
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{triggerButton}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {isAddingShoppingItemDialog ? "NEW " : "UPDATE "}
            SHOPPING ITEM
          </DialogTitle>
          <DialogDescription>
            {isAddingShoppingItemDialog ? "Add " : "Update "}
            your shopping item to buy.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-[0.8rem] items-center"
          >
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <Input placeholder="ex. 로봇청소기" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="modelName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>ModelName</FormLabel>
                  <FormControl>
                    <Input placeholder="ex. T20" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input placeholder="ex. 1500000" type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full mt-4"
              disabled={isSubmitting}
            >
              <div className="flex items-center gap-2">
                {isSubmitting && (
                  <Loader2 className="h-4 w-4 text-white animate-spin" />
                )}
                {isAddingShoppingItemDialog ? "ADD" : "UPDATE"}
              </div>
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ShoppingItemDialog;
