import Item from "../models/items.model.js";

export const addItem = async (req, res) => {
  const { name, description, amount } = req.body;
  try {
    if (req.user.role === "STOCK CLERK") {
      if (!req.user.isActive) {
        return res
          .status(403)
          .json({ message: "access denied - inactive user" });
      }
      if (!name || !description || !amount) {
        return res.status(400).json({ message: "all fields are required" });
      }
      const newItem = new Item({
        name,
        description,
        amount,
      });
      await newItem.save();
      if (newItem) {
        res.status(201).json(newItem);
      } else {
        res.status(400).json({ error: "invalid input" });
      }
    } else {
      res.status(400).json({ message: "Invalid Role for this operation" });
    }
  } catch (error) {
    console.log("error in addItem", error.message);
    res.status(500).json({ message: error.message });
  }
};

export const updateItem = async (req, res) => {
  const { itemId } = req.params;
  try {
    if (!req.user.isActive) {
      return res.status(403).json({ message: "access denied - inactive user" });
    }
    if (!itemId) {
      return res.status(400).json({ message: "Id not provided" });
    }
    const uppdated = await Item.findByIdAndUpdate(itemId, req.body, {
      new: true,
    });
    await uppdated.save();
    res.json({ uppdated });
  } catch (error) {
    console.log("error in update item", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteItem = async (req, res) => {
  const { itemId } = req.params;
  try {
    if (!req.user?.isActive) {
      console.log(req.user);
      return res.status(403).json({ message: "access denied - inactive user" });
    }
    if (!itemId) {
      return res.status(400).json({ message: "Id not provided" });
    }
    const item = await Item.findByIdAndDelete(itemId);
    res.status(200).json({ message: "item deleted successfully" });
  } catch (error) {
    console.log("error in update item", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
