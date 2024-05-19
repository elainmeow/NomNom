import mongoose, { Schema, Document } from 'mongoose';
import { OrderStatus } from '../constants/order_status';
import { FoodSchema } from './food.model';

export interface OrderItem {
  food: typeof FoodSchema;
  price: number;
  quantity: number;
}

export const OrderItemSchema = new Schema<OrderItem>({
  food: { type: FoodSchema, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true }
});

export interface Order extends Document {
  totalPrice: number;
  name: string;
  address: string;
  paymentId?: string;
  status: OrderStatus;
  user: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
  items: OrderItem[];
}

const orderSchema = new Schema<Order>({
  name: { type: String, required: true },
  address: { type: String, required: true },
  paymentId: { type: String },
  totalPrice: { type: Number, required: true },
  items: { type: [OrderItemSchema], required: true },
  status: { type: String, default: OrderStatus.NEW },
  user: { type: Schema.Types.ObjectId, required: true, ref: 'User' }
}, {
  timestamps: true
});

export const OrderModel = mongoose.model<Order>('Order', orderSchema);
