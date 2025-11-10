import React, { useState } from "react";
import { useTaskStore } from "../store/useTaskStore";
const AddItem = () => {
  const { addItems, isAddingItem } = useTaskStore();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    amount: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addItems(formData);
  };
  return (
    <div className="grid items-center justify-center p-3">
      <div className="flex flex-col gap-2  ">
        <h1 className="font-bold text-xl">Insert the item info below</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-1">
          <label htmlFor="" className="label">
            Item Name
          </label>
          <input
            type="text"
            className="input mt-1 focus:outline-0 h-9"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />

          <label htmlFor="" className="label">
            description
          </label>
          <input
            type="text"
            className="input mt-1 focus:outline-0 "
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
          <label htmlFor="" className="label">
            amount
          </label>
          <input
            type="text"
            className="input mt-1 focus:outline-0 h-9"
            value={formData.amount}
            onChange={(e) =>
              setFormData({ ...formData, amount: e.target.value })
            }
          />

          <button
            type="submit"
            className="btn btn-primary w-full h-9 mt-6"
            disabled={isAddingItem}
          >
            {!isAddingItem ? "Add" : "loading ..."}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
