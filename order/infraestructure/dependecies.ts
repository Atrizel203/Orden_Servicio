import { SendMessageService } from "../../broker/application/sendMessageService";
import { Amqplib } from "../../broker/infraestructure/ports/AmqplibRepository";
import { CreateOrderService } from "../application/createOrderService";
import { CreateOrderController } from "./createOrderController";

const amqp = new Amqplib("amqp://18.209.192.241/");

const sendMessageService = new SendMessageService(amqp);

const createdOrderService = new CreateOrderService(sendMessageService);

export const createOrderController = new CreateOrderController(createdOrderService);
