import CartItem from '../models/CartItem.js';

export const getCart = async (req, res) => {
  const items = await CartItem.find();
  res.json(items);
};

export const addToCart = async (req, res) => {
  const { productId, name, image, price } = req.body;

  let item = await CartItem.findOne({ productId });

  if (item) {
    item.quantity += 1;
    await item.save();
    return res.json(item);
  }

  const newItem = new CartItem({ productId, name, image, price });
  await newItem.save();
  res.json(newItem);
};

export const updateQuantity = async (req, res) => {
  const { productId, action } = req.body;

  const item = await CartItem.findOne({ productId });

  if (!item) return res.status(404).json({ message: 'Item not found' });

  item.quantity += action === 'inc' ? 1 : -1;

  if (item.quantity <= 0) {
    await item.deleteOne();
    return res.json({ message: 'Item removed' });
  }

  await item.save();
  res.json(item);
};
