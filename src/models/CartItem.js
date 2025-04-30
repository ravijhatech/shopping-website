import mongoose from 'mongoose';

const CartItemSchema = new mongoose.Schema({
  productId: String,
  name: String,
  image: String,
  price: String,
  quantity: { type: Number, default: 1 },
});

const CartItem = mongoose.model('CartItem', CartItemSchema);
export default CartItem;
