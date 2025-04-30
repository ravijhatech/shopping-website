import express from 'express'
const router = express.Router();
const CartItem = require('./models/CartItem');

// Add item to cart
router.post('/add', async (req, res) => {
  const { productId, name, price, image } = req.body;

  const existingItem = await CartItem.findOne({ productId });

  if (existingItem) {
    existingItem.quantity += 1;
    await existingItem.save();
    return res.json(existingItem);
  }

  const newItem = new CartItem({ productId, name, price, image });
  await newItem.save();
  res.json(newItem);
});

// Get all cart items
router.get('/', async (req, res) => {
  const items = await CartItem.find();
  res.json(items);
});

// Increment/Decrement quantity
router.post('/update', async (req, res) => {
  const { productId, action } = req.body;

  const item = await CartItem.findOne({ productId });
  if (!item) return res.status(404).send('Item not found');

  if (action === 'inc') item.quantity += 1;
  else if (action === 'dec') item.quantity -= 1;

  if (item.quantity <= 0) {
    await CartItem.deleteOne({ productId });
    return res.send({ message: 'Item removed' });
  }

  await item.save();
  res.json(item);
});

module.exports = router;
