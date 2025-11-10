import {
  BookPlus,
  BookX,
  Check,
  FileQuestion,
  Heading1,
  LayoutDashboard,
  LibrarySquare,
  List,
  Loader,
  Plus,
  RepeatIcon,
  SearchCheck,
  ShieldCheck,
  ShieldQuestion,
  Trash2,
  Trash2Icon,
  User,
  UserCheck,
  UserCircle,
} from "lucide-react";
import React, { useState } from "react";
import AddItem from "../components/AddItems";
import DeleteItem from "../components/DeleteItem";
import ActivateUser from "../components/ActivateUser";
import UpdateRole from "../components/UpdateRole";
import GetItems from "../components/GetItems";
import RequestCheckout from "../components/RequestCheckout";
import ApproveCheckout from "../components/ApproveCheckout";
import UpdateItemStatus from "../components/UpdateItemStatus";

const DashboardPage = () => {
  const [task, setTask] = useState("");
  const [showFull, setShowFull] = useState(false);
  const render = (task) => {
    switch (task) {
      case "addItems":
        return <AddItem />;
      case "deleteItem":
        return <DeleteItem />;
      case "toggleUserStatus":
        return <ActivateUser />;
      case "updateUserRole":
        return <UpdateRole />;
      case "getItem":
        return <GetItems />;
      case "requestCheckout":
        return <RequestCheckout />;
      case "approveRequest":
        return <ApproveCheckout />;
      case "updateItemStatus":
        return <UpdateItemStatus />;

      default:
    }
  };
  return (
    <div className="container grid grid-cols-1  w-full sm:flex gap-2 mx-auto px-auto p-4  sm:p-2   pt-[58px]  sm:pt-[58px] min-h-screen ">
      <div className="flex flex-col w-[250px] rounded-2xl bg-base-200/60 p-2">
        <div className="flex gap-2 p-2 justify-between border-b-1 border-primary/20">
          <div className=" flex gap-2">
            <LayoutDashboard className="size-5 text-primary" />
            <h2>Dashboard</h2>
          </div>
        </div>
        <button onClick={() => setTask("addItems")}>
          <div
            className={`flex gap-2 cursor-pointer ${
              task === "addItems"
                ? "border-l-2 border-green-600 bg-base-100"
                : "hover:bg-base-100"
            } rounded-xl p-2 mt-2 items-center`}
          >
            <Plus className="size-4 text-green-600" />
            <div className="flex w-full items-baseline justify-between ">
              <h3 className="text-sm">Add Items</h3>
            </div>
          </div>
        </button>
        <button onClick={() => setTask("updateItemStatus")}>
          <div
            className={`flex gap-2 cursor-pointer ${
              task === "updateItemStatus"
                ? "border-l-2 border-primary bg-base-100"
                : "hover:bg-base-100"
            } rounded-xl p-2 mt-2 items-center`}
          >
            <SearchCheck className="size-4 text-primary" />
            <div className="flex w-full items-baseline justify-between ">
              <h3 className="text-sm">Update Item Status</h3>
            </div>
          </div>
        </button>
        <button onClick={() => setTask("deleteItem")}>
          <div
            className={`flex gap-2 cursor-pointer ${
              task === "deleteItem"
                ? "border-l-2 border-red-600 bg-base-100"
                : "hover:bg-base-100"
            } rounded-xl p-2 mt-2 items-center`}
          >
            <Trash2 className="size-4 text-red-600" />
            <div className="flex w-full items-baseline justify-between ">
              <h3 className="text-sm">Delete Item</h3>
            </div>
          </div>
        </button>
        <button onClick={() => setTask("toggleUserStatus")}>
          <div
            className={`flex gap-2 cursor-pointer ${
              task === "toggleUserStatus"
                ? "border-l-2 border-primary bg-base-100"
                : "hover:bg-base-100"
            } rounded-xl p-2 mt-2 items-center`}
          >
            <UserCheck className="size-4 text-primary" />
            <div className="flex w-full items-baseline justify-between ">
              <h3 className="text-sm">Activate User</h3>
            </div>
          </div>
        </button>
        <button onClick={() => setTask("updateUserRole")}>
          <div
            className={`flex gap-2 cursor-pointer ${
              task === "updateUserRole"
                ? "border-l-2 border-primary bg-base-100"
                : "hover:bg-base-100"
            } rounded-xl p-2 mt-2 items-center`}
          >
            <UserCircle className="size-4 text-primary" />
            <div className="flex w-full items-baseline justify-between ">
              <h3 className="text-sm">Update User Roles</h3>
            </div>
          </div>
        </button>
        <button onClick={() => setTask("approveRequest")}>
          <div
            className={`flex gap-2 cursor-pointer ${
              task === "approveRequest"
                ? "border-l-2 border-primary bg-base-100"
                : "hover:bg-base-100"
            } rounded-xl p-2 mt-2 items-center`}
          >
            <ShieldCheck className="size-4 text-primary" />
            <div className="flex w-full items-baseline justify-between ">
              <h3 className="text-sm">Approve Checkout</h3>
            </div>
          </div>
        </button>
        <button onClick={() => setTask("getItem")}>
          <div
            className={`flex gap-2 cursor-pointer ${
              task === "getItem"
                ? "border-l-2 border-primary bg-base-100"
                : "hover:bg-base-100"
            } rounded-xl p-2 mt-2 items-center`}
          >
            <List className="size-4 text-primary" />
            <div className="flex w-full items-baseline justify-between ">
              <h3 className="text-sm">Import Items</h3>
            </div>
          </div>
        </button>

        <button onClick={() => setTask("requestCheckout")}>
          <div
            className={`flex gap-2 cursor-pointer ${
              task === "requestCheckout"
                ? "border-l-2 border-primary bg-base-100"
                : "hover:bg-base-100"
            } rounded-xl p-2 mt-2 items-center`}
          >
            <ShieldQuestion className="size-4 text-primary" />
            <div className="flex w-full items-baseline justify-between ">
              <h3 className="text-sm">Request Checkout</h3>
            </div>
          </div>
        </button>
      </div>
      <div className="flex flex-col  md:w-[calc(100%-150px)] bg-base-200/50 rounded-2xl">
        {render(task)}
      </div>
    </div>
  );
};

export default DashboardPage;
