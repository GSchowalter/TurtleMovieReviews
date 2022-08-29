import { MongoClient } from "mongodb"

export async function connectToDatabase {
    return MongoClient.connect(MONGODB_URI)
}