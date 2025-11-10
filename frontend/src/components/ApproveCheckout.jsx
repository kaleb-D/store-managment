import { Loader, Trash2Icon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useTaskStore } from "../store/useTaskStore";

const ApproveCheckout = () => {
  const { getRequests, requests, approveRequest } = useTaskStore();
  useEffect(() => {
    getRequests();
  }, [getRequests]);
  const [data, setData] = useState({ amount: "" });

  if (false) {
    return (
      <div className="flex w-full h-full items-center justify-center">
        <Loader className="size-10 animate-spin" />
      </div>
    );
  } else {
    return (
      <div className="p-3 space-y-3">
        <h3 className="pl-3 font-bold">Pending Requests</h3>
        {requests.map((request) => (
          <div
            key={request._id}
            className="flex items-center justify-between pb-1 pt-1 pl-3 pr-3 rounded-lg bg-base-300"
          >
            <h3>{request.itemName}</h3>
            <div className="flex gap-2 items-center">
              <h4 className="text-sm">{request.amount} asked</h4>
            </div>
            <div className="flex gap-2 items-center">
              <button
                className="btn btn-primary btn-sm"
                onClick={() => approveRequest(request._id)}
              >
                Approve
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
};

export default ApproveCheckout;
