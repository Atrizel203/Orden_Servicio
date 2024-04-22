import express from "express";
import cors from "cors";

import orderRouter from "./order/infraestructure/orderRouter";

const app = express();

app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"]
}));

app.use(express.json());

app.use("/api/order", orderRouter);

app.listen(3002, () => {
    console.log('Server is running in 3002');
});