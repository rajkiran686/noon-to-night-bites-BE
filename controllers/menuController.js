import MenuItem from '../models/MenuItem.js';

// GET all menu items
export const getMenuItems = async (req, res) => {
  try {
    const items = await MenuItem.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch menu items' });
  }
};

// POST new menu item
export const addMenuItem = async (req, res) => {
    console.log(req.body);
  try {
    const newItem = new MenuItem(req.body);
    await newItem.save();
    res.json(newItem);
  } catch (err) {
    res.status(400).json({ error: 'Failed to add menu item' });
  }
};

// PUT update menu item
export const updateMenuItem = async (req, res) => {
  try {
    const updatedItem = await MenuItem.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedItem);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update menu item' });
  }
};

// DELETE menu item
export const deleteMenuItem = async (req, res) => {
  try {
    await MenuItem.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(400).json({ error: 'Failed to delete menu item' });
  }
};
