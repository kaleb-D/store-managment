import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";
import toast from "react-hot-toast";

export const useTaskStore = create((set, get) => ({
  items: [],
  reports: [],
  users: [],
  requests: [],
  isAddingItem: false,
  isUpdatingItem: false,
  isDeletingItem: false,
  isGettingItems: false,
  isGettingReports: false,
  addItems: async (data) => {
    set({ isAddingItem: true });
    try {
      const res = await axiosInstance.post("/item/add", data);
      //set({ items: items.push(res.data) });
      toast.success("Item Added.");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isAddingItem: false });
    }
  },
  updateItems: async (itemId, data) => {
    set({ isUpdatingItem: false });
    try {
      const res = await axiosInstance.post(`/item/update/${itemId}`, data);
      toast.success("Item Updated!");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isUpdatingItem: false });
    }
  },
  deleteItem: async (itemId) => {
    set({ isDeletingItem: true });
    try {
      const res = await axiosInstance.delete(`/item/delete/${itemId}`);
      toast.success("Item deleted!");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isDeletingItem: false });
    }
  },
  toggleUserStatus: async (userId) => {
    try {
      const res = await axiosInstance.post(`/manager/update-status/${userId}`);
      toast.success("status updated.");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },
  updateUserRole: async (userId, role) => {
    try {
      const res = await axiosInstance.post(
        `/manager/update-role/${userId}`,
        role
      );
      toast.success("Role Updated");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },
  approveRequest: async (reqId) => {
    try {
      const res = await axiosInstance.post(`/manager/approve/${reqId}`);
      toast.success("request approved");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },
  getItems: async () => {
    set({ isGettingItems: true });
    try {
      const res = await axiosInstance.get("/item/");
      set({ items: res.data });
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isGettingItems: false });
    }
  },
  getReports: async () => {
    set({ isGettingReports: true });
    try {
      const res = await axiosInstance.get("/manager/reports");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },
  updateItemStatus: async (itemId) => {
    try {
      const res = await axiosInstance.post(
        `/manager/update-item-status/${itemId}`
      );
      toast.success("Item status updated");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },
  requestCheckout: async (itemId, amount) => {
    try {
      const res = await axiosInstance.post(
        `/manager/request-checkout/${itemId}`,
        amount
      );
      toast.success(res.data?.message || "item dispensed");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },
  getRequests: async () => {
    try {
      const res = await axiosInstance.get("/manager/requests");
      set({ requests: res.data });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },
  getUsers: async () => {
    try {
      const res = await axiosInstance.get("/auth");
      set({ users: res.data });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },
}));
