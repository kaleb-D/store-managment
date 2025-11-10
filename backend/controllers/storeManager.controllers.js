import Request from "../models/requests.model.js";
import User from "../models/user.model.js";
import Item from "../models/items.model.js";

export const toggleUserStatus = async (req, res) => {
  const { userId } = req.params;
  try {
    if (req.user.role === "STORE MANAGER") {
      if (!req.user.isActive) {
        return res
          .status(403)
          .json({ message: "access denied - inactive user" });
      }
      const user = await User.findById(userId);
      user.isActive = !user.isActive;
      await user.save();
      res.status(200).json({ message: "user status updated" });
    } else {
      res.status(403).json({ message: "Access denied due role" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ Error: error.message });
  }
};

export const updateUserRole = async (req, res) => {
  const { userId } = req.params;
  const { role } = req.body;
  try {
    if (req.user.role === "STORE MANAGER") {
      if (!req.user.isActive) {
        return res
          .status(403)
          .json({ message: "access denied - inactive user" });
      }
      const updatedUser = await User.findByIdAndUpdate(userId, { role });
      res.status(200).json({ message: "user role updated" });
    } else {
      res.status(403).json({ message: "Access denied due role" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ Error: error.message });
  }
};

export const approveRequest = async (req, res) => {
  const { reqId } = req.params;
  const user = req.user;
  try {
    if (req.user.role === "STORE MANAGER") {
      if (!user.isActive) {
        return res
          .status(403)
          .json({ message: "access denied - inactive user" });
      }
      const req = await Request.findByIdAndUpdate(reqId, { isApproved: true });
      res.status(200).json({ message: "requst approved" });
    } else {
      res.status(403).json({ message: "Access denied due role" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "error in approving request" });
  }
};

export const getReports = async (req, res) => {
  try {
    const requests = await Request.find({});
    res.statu(200).json(requests);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: "error in getting reports" });
  }
};

//TECHNICIAN

export const updateItemStatus = async (req, res) => {
  const itemId = req.params.itemId;
  try {
    if (req.user.role === "TECHNICIAN") {
      if (!req.user.isActive) {
        return res
          .status(403)
          .json({ message: "access denied - inactive user" });
      }
      const item = await Item.findById(itemId);
      item.isAvailable = !item.isAvailable;
      item.save();
    } else {
      res.status(403).json({ message: "Access denied due role" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: "error in updating item status" });
  }
};

//send checkout request

export const requestCheckout = async (req, res) => {
  const { itemId } = req.params;
  const { amount } = req.body;
  try {
    const item = await Item.findById(itemId);
    if (item.amount >= amount) {
      if (item.isAvailable) {
        const newRequest = new Request({
          userId: req.user._id,
          itemId,
          itemName: item.name,
          amount,
        });
        await newRequest.save();
        if (newRequest) {
          //deduce the amount from available items
          item.amount -= amount;
          await item.save();
          res.status(201).json({
            message: "Checkout request created successfully",
            request: newRequest,
          });
        }
      } else {
        res.status(400).json({
          message:
            "The item is not ready for some reasons contact the technician",
        });
      }
    } else {
      res.status(400).json({ message: "Insufficient item amount" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ Error: error.message });
  }
};

//get items

export const getItems = async (req, res) => {
  const { isAvailable } = req?.params;
  try {
    const items = await Item.find({ amount: { $gt: 0 } });
    res.status(200).json(items);
  } catch (error) {
    console.log("error in getItems controller", error.message);
    res.status(400).json({ message: error.message });
  }
};

export const getRequsets = async (req, res) => {
  try {
    const requests = await Request.find({ isApproved: false });
    res.status(200).json(requests);
  } catch (error) {
    console.log("error in getRequests controller", error.message);
    res.status(400).json({ message: error.message });
  }
};
