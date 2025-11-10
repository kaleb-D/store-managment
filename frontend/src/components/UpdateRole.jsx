import { Activity, Check, Trash2Icon, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useTaskStore } from "../store/useTaskStore";

const ActivateUser = () => {
  const { updateUserRole, users, getUsers } = useTaskStore();
  const [data, setRole] = useState({
    role: "",
    userId: "",
  });
  useEffect(() => {
    getUsers();
  }, [getUsers]);
  const update = async (userId, role) => {
    await updateUserRole(userId, role);
  };
  return (
    <div className="p-3 space-y-3">
      <h3 className="pl-3 font-bold">Change Users Role</h3>
      {users.map((user) => (
        <div
          key={user._id}
          className="flex w-full items-center justify-between pb-1 pt-1 pl-3 pr-3 rounded-lg bg-base-300"
        >
          <h3 className="w-full">{user.name}</h3>
          <div className="flex w-full gap-2 items-center">
            <h4> {user.role} to</h4>
            <select
              className="select select-primary select-sm w-full max-w-50 focus:outline-0"
              value={data.userId == user._id ? data.role : user.role}
              onChange={(e) =>
                setRole({ role: e.target.value, userId: user._id })
              }
            >
              <option disabled selected>
                ROLE
              </option>
              <option>STOCK CLERK</option>
              <option>STORE MANAGER</option>
              <option>STORE KEEPER</option>
              <option>STAFF MEMBER </option>
              <option>TECHNICIAN </option>
            </select>
            <button
              className="btn btn-sm btn-primary"
              onClick={() => update(user._id, data)}
            >
              Confirm
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActivateUser;
