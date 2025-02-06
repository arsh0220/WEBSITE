// import express from "express";
// import cors from "cors";
// import bodyParser from "body-parser";
// import bcrypt from "bcryptjs";
// import dotenv from "dotenv";
// import mongoose from "mongoose";
// import User from "./models/user.js";
// const app = express();
// dotenv.config();
// const connectDB = async () => {
//     try {
//         const conn = await mongoose.connect(process.env.Mongo_URI);
//         console.log("MongoDB connected");
//     } catch (error) {
//         console.error("Error:", error);
//         process.exit(1);
//     }
// }
// connectDB();
// app.use(cors());
// app.use(bodyParser.json());
// app.post("/api/signup", async (req, res) => {
//     console.log("Received Data:", req.body);

//     const { firstName, lastName, email, password } = req.body;

//     if (!firstName || !lastName || !email|| !password) {
//         return res.status(400).json({ message: "All fields are required!" });
//     }
//     try {
//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash("password", salt);
//         console.log("Hashed Password:", hashedPassword);
//         // User.push({ firstName, lastName, password:hashedPassword });
//         const user = new User({
//             firstName: firstName,
//             lastName: lastName,
//             email: email,
//             password: hashedPassword
//         })

//         const insertUser = await user.save();
//         if (!insertUser) {
//             return res.status(500).json({ message: "Failed to insert user!", });
//         }
//         res.status(201).json({ message: "User registered successfully!", insertUser });
//         const existUser = await user.findOne({email});
//         if (existUser) {
//             return res.status(400).json({ message: "User already exists!" });
//         }
//     } catch (error) {
//         console.error("Error:", error);
//         return res.status(500).json({ message: "Something went wrong!" });
//     }
// });

// app.listen(5000, () => console.log("Server running on port 5000"));
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import mongoose from "mongoose";
import User from "./models/user.js";
const app = express();
dotenv.config();
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.Mongo_URI);
        console.log("MongoDB connected");
    } catch (error) {
        console.error("Error:", error);
        process.exit(1);
    }
}
connectDB();
app.use(cors());
app.use(bodyParser.json());
app.post("/api/signup", async (req, res) => {
    console.log("Received Data:", req.body);

    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password) {
        return res.status(400).json({ message: "All fields are required!" });
    }
    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(409).json({ message: "Email already exists!" });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash("password", salt);
        console.log("Hashed Password:", hashedPassword);
        // User.push({ firstName, lastName, email , password:hashedPassword });
        const user = new User({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hashedPassword
        });

        const insertUser = await user.save();
        if (!insertUser) {
            return res.status(500).json({ message: "Failed to insert user!", });
        }
        res.status(201).json({ message: "User registered successfully!", insertUser });
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ message: "Something went wrong!" });
    }
});

app.listen(5000, () => console.log("Server running on port 5000"));