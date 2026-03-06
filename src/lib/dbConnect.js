import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = process.env.MONGODB_URI;
const dbname = process.env.DBNAME;

const client = new MongoClient(uri, {
  serverApi: { version: ServerApiVersion.v1, strict: true, deprecationErrors: true }
});

// নামের বানান বড় হাতের C দিয়ে dbConnect রাখুন
export async function dbConnect() {
  try {
    await client.connect();
    return client.db(dbname);
  } catch (error) {
    console.error("DB Connection Error:", error);
    throw error;
  }
}