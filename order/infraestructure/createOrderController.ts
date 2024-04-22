import { Request, Response } from "express";
import { CreateOrderService } from "../application/createOrderService";

export class CreateOrderController {
    constructor(private readonly createdOrderService: CreateOrderService) {}
    async execute(req: Request, res: Response) {
        try {
            const order = req.body;
            const result = await this.createdOrderService.execute(order);
            res.status(201).json(result);
        } catch (error: any) {
            console.log(error);
            return res.status(500).json(error.message);
        }
    }
}