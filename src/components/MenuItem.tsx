import type { MenuItem } from "../types";

type MenuItemProps = {
  item: MenuItem;
};

export default function MenuItem({ item }: MenuItemProps) {
  return (
    <button className="border-2 border-teal-400 hover:bg-teal-200 p-3 w-full flex justify-between">
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>
  );
}
