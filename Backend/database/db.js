import mongoose from "mongoose";
import { mongoDBURL } from "../config.js"

const connectToMongo = () => {
    mongoose
        .connect(mongoDBURL, { useNewUrlParser: true })
        .then(() => {
            console.log("Connected to MongoDB Successfully");
        })
        .catch((error) => {
            console.error("Error connecting to MongoDB", error);
        });
};

export default connectToMongo