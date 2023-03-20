import { Order } from "../../entities/OrderEntity";
import { CreateNewOrderInterface } from "./order.interfaces";

export const createNewOrder = async (orderData: CreateNewOrderInterface) => {
  const { company, employId, item } = orderData;

  const newOrder = Order.create({
    company,
    employId,
    item,
  });

  await newOrder.save();

  return newOrder;
};
