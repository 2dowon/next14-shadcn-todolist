import { create } from "zustand";

const myShoppingList = [
  {
    id: 1,
    price: 31600000,
    category: "로봇청소기",
    modelName: "test1",
  },
  {
    id: 2,
    price: 24200,
    category: "냉장고",
    modelName: "test2",
  },
  {
    id: 3,
    price: 8370,
    category: "TV",
    modelName: "test3",
  },
] as IShoppingItem[];

interface IShoppingItem {
  id: number;
  category: string;
  modelName: string;
  price: number;
}

interface IShoppingItemListStore {
  shoppingList: IShoppingItem[];
  addShoppingItem: (shoppingItem: IShoppingItem) => void;
  updateShoppingItem: (shoppingItem: IShoppingItem) => void;
  deleteShoppingItem: (id: number) => void;
}

const useShoppingListStore = create<IShoppingItemListStore>((set) => ({
  shoppingList: myShoppingList,
  addShoppingItem: (todo: IShoppingItem) =>
    set((state) => ({
      shoppingList: [...state.shoppingList, todo],
    })),
  updateShoppingItem: (newShoppingItem: IShoppingItem) =>
    set((state) => ({
      shoppingList: state.shoppingList.map((shoppingItem) => {
        return shoppingItem.id === newShoppingItem.id
          ? newShoppingItem
          : shoppingItem;
      }),
    })),
  deleteShoppingItem: (id: number) =>
    set((state) => ({
      shoppingList: state.shoppingList.filter(
        (shoppingItem) => shoppingItem.id !== id
      ),
    })),
}));

export { useShoppingListStore };
export type { IShoppingItem, IShoppingItemListStore };
