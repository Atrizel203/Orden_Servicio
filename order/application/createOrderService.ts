import { Order } from "../domain/order";
import { QueueName } from "../../broker/domain/entities";
import { SendMessageService } from "../../broker/application/sendMessageService";

export class CreateOrderService {
    constructor(private readonly sendMessageService: SendMessageService) {}
    async execute(order : Order) : Promise<Order> {
        try {
             await this.sendMessageService.execute(order, QueueName.BASE);    
            console.log(order);
            return order;
        } catch (error : any) {
            throw new Error(error);
        }
    }
}