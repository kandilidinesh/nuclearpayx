import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
    res.status(200).send({
        status: "OK",
        service: "gateway",
        timestamp: new Date().toISOString()
    });
});

export default app;
