import { Activity, Check, Trash2Icon, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useTaskStore } from "../store/useTaskStore";

const UpdateItemStatus = () => {
  const { updateItemStatus, items, getItems } = useTaskStore();
  useEffect(() => {
    getItems();
  }, [getItems]);
  const toggle = (itemId) => {
    updateItemStatus(itemId);
  };
  return (
    <div className="p-3 space-y-3">
      <h3 className="pl-3 font-bold">Items in stock</h3>
      {items.map((item) => (
        <div
          key={item._id}
          className="flex items-center justify-between pb-1 pt-1 pl-3 pr-3 bg-base-100 rounded-lg hover:bg-base-300"
        >
          <h3>{item.name}</h3>
          <div className="flex gap-2 items-center">
            {!item.isAvailable ? (
              <button
                className="cursor-pointer flex gap-1 w-full items-center hover:bg-base-100 p-1 rounded-xl "
                type="submit"
                onClick={() => toggle(item._id)}
              >
                <Check className="cursor-pointer text-green-500 size-5 font-bold" />
                <h4>make available</h4>
              </button>
            ) : (
              <button
                type="submit"
                className="cursor-pointer flex gap-1 w-full items-center hover:bg-base-100 p-1 rounded-xl "
                onClick={() => toggle(item._id)}
              >
                <X className="cursor-pointer text-red-500 size-5" />
                <h4>Disable</h4>
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpdateItemStatus;
