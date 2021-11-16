import mongoose from "mongoose";
import { config } from "../config/Constants";

export class MongoConnection {
    public async connect(): Promise<void> {
        try {
            await mongoose.connect(config.MONGO_CONNECTION, { user: 'root', pass: 'root', dbName: 'shortener' })
            console.log('Database connected');
        } catch (error) {
            console.log(error.message);
            process.exit(1);
        }
    }
}