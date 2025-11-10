import { Loader, Trash2Icon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useTaskStore } from "../store/useTaskStore";

const RequestCheckout = () => {
  const { requestCheckout, isGettingItems, items, getItems } = useTaskStore();

  const [data, setData] = useState({ amount: "" });
  const [requestSent, setRequestsSent] = useState(0);
  useEffect(() => {
    getItems();
  }, [getItems, requestSent]);
  if (isGettingItems) {
    return (
      <div className="flex w-full h-full items-center justify-center">
        <Loader className="size-10 animate-spin" />
      </div>
    );
  } else {
    return (
      <div className=" w-full p-3 space-y-3">
        <h3 className="pl-3 font-bold">Items in the Store</h3>
        {items.map((item) => (
          <div
            key={item._id}
            className="flex items-center justify-between pb-1 pt-1 pl-3 pr-3 rounded-lg bg-base-300"
          >
            <h3>{item.name}</h3>
            <div className="flex gap-2 items-center">
              <h4 className="text-sm">{item.amount} available</h4>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="text"
                className="input input-xs max-w-50 focus:outline-0"
                placeholder="Enter amount"
                value={data.amount}
                onChange={(e) =>
                  setTimeout(setData({ amount: e.target.value }), 1000)
                }
              />
              <button
                className="btn btn-primary btn-sm"
                onClick={() => (
                  setRequestsSent(requestSent + 1),
                  requestCheckout(item._id, data)
                )}
              >
                Send Request
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
};

export default RequestCheckout;
