import { Trash2Icon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useTaskStore } from "../store/useTaskStore";

const DeleteItem = () => {
  const { deleteItem, items, getItems } = useTaskStore();
  useEffect(() => {
    getItems();
  }, [getItems, items]);
  const handleDelete = (itemId) => {
    deleteItem(itemId);
  };
  return (
    <div className="p-3 space-y-3">
      <h3 className="pl-3 font-bold">Items in the Store</h3>
      {items.map((item) => (
        <div
          key={item._id}
          className="flex items-center justify-between pb-1 pt-1 pl-3 pr-3 bg-base-100 rounded-lg hover:bg-base-300"
        >
          <h3>{item.name}</h3>
          <div className="flex gap-2 items-center">
            <h4 className="text-sm">{item.amount} in store</h4>
            <button type="submit" onClick={() => handleDelete(item._id)}>
              <Trash2Icon className="cursor-pointer text-red-500 size-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DeleteItem;
