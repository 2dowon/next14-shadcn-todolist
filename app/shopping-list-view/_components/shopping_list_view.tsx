import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const myShoppingList = [
  {
    id: 1,
    category: "TV",
    modelName: "Test1",
    price: 550000,
  },
  {
    id: 2,
    category: "로봇청소기",
    modelName: "Test2",
    price: 350000,
  },
  {
    id: 3,
    category: "냉장고",
    modelName: "Test3",
    price: 1000000,
  },
  {
    id: 4,
    category: "세탁기",
    modelName: "Test4",
    price: 800000,
  },
];

const ShoppingListView = () => {
  return (
    <Table>
      <TableCaption>A list of your shopping products.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Category</TableHead>
          <TableHead>Model Name</TableHead>
          <TableHead>Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {myShoppingList.map((shopping) => (
          <TableRow key={shopping.id}>
            <TableCell>{shopping.category}</TableCell>
            <TableCell>{shopping.modelName}</TableCell>
            <TableCell>{shopping.price}원</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell>2700000원</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default ShoppingListView;
