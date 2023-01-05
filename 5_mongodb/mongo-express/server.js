// const { ObjectID } = require("bson");
const express = require("express");
const ObjectID = require("mongodb").ObjectId;

const app = express();

//db setup
let db;
const MongoClient = require("mongodb").MongoClient;
const connectionUrl = "mongodb://localhost:27017/";
(async function () {
  try {
    const client = await MongoClient.connect(connectionUrl);
    db = client.db("ecom");
  } catch (err) {
    throw err;
  }
})();

app.get("/", async (req, res, next) => {
  // 63b6b2e80b1902a475a47eb5
  //   try {
  //     const result = await db
  //       .collection("products")
  //       .insertOne({ name: "camera", price: 400 });
  //     res.send(result);
  //   } catch (err) {
  //     throw err;
  //   }


//   try {
//     const result = await db
//       .collection("products")
//       .findOne({ name:{$eq:'product25'} });
//     res.send(result);
//   } catch (err) {
//     throw err;
//   }


  try {
    const result = await db
      .collection("products")
      .findOne({ _id:ObjectID('63b6b2e80b1902a475a47eb5') });
    res.send(result);
  } catch (err) {
    throw err;
  }



//   try {
//     const result = await db
//       .collection("products")
//       .find({ _id: ObjectID("63b6b2e80b1902a475a47eb5") }).toArray();
//     res.send(result);
//   } catch (err) {
//     throw err;
//   }
});

app.listen(4000, () => {
  console.log(`listinnng on port 4000`);
});
