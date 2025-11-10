import { Activity, Check, Trash2Icon, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useTaskStore } from "../store/useTaskStore";

const ActivateUser = () => {
  const { toggleUserStatus, users, getUsers } = useTaskStore();
  useEffect(() => {
    getUsers();
  }, [getUsers]);
  const toggle = (userId) => {
    toggleUserStatus(userId);
  };
  return (
    <div className="p-3 space-y-3">
      <h3 className="pl-3 font-bold">Users and their status</h3>
      {users.map((user) => (
        <div
          key={user._id}
          className="flex items-center justify-between pb-1 pt-1 pl-3 pr-3 bg-base-100 rounded-lg hover:bg-base-300"
        >
          <h3>{user.name}</h3>
          <div className="flex gap-2 items-center">
            {!user.isActive ? (
              <button
                className="cursor-pointer flex gap-1 w-full items-center hover:bg-base-100 p-1 rounded-xl "
                type="submit"
                onClick={() => toggle(user._id)}
              >
                <Check className="cursor-pointer text-green-500 size-5 font-bold" />
                <h4>Activate</h4>
              </button>
            ) : (
              <button
                type="submit"
                className="cursor-pointer flex gap-1 w-full items-center hover:bg-base-100 p-1 rounded-xl "
                onClick={() => toggle(user._id)}
              >
                <X className="cursor-pointer text-red-500 size-5" />
                <h4>Disable</h4>
              </button>
            )}
            {/* <h4 className="text-sm">{user.isActive ? "active" : "inactive"}</h4>
            <button type="submit" onClick={() => toggle(user._id)}>
              <Trash2Icon className="cursor-pointer text-red-500 size-4" />
            </button> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActivateUser;
