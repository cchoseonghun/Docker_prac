// import { MongoClient } from "mongodb";
// const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.4l95n6a.mongodb.net/?retryWrites=true&w=majority`;
// const client = new MongoClient(uri);

// export interface Item {
//   listing_url: string;
//   name: string;
//   summary: string;
// }

// type ItemSummary = Pick<Item, "name" | "summary">;

// async function run(): Promise<void> {
//   try {
//     const database = client.db("sample_airbnb");
//     const items = database.collection<Item>("listingsAndReviews");
//     const item = await items.findOne<ItemSummary>(
//       { name: "Ribeira Charming Duplex" },
//       {
//         projection: { _id: 0, name: 1, summary: 1 },
//       }
//     );
//     console.log(item);
//   } finally {
//     await client.close();
//   }
// }
// run().catch(console.dir);