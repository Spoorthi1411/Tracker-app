import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import connectTOMongoDb from "./db/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

//app.get("/",(req,res) => {
//    res.send("Hello World !!");
//});

app.listen(PORT,()=>{
    connectTOMongoDb();
    console.log(`server running on port ${PORT}`);
});