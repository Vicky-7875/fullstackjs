const router = require("express").Router();
const ErrorHandler = require("../errors/ErrorHandler");
let products = require("../productData");
// const apiKeyMiddleWare = require("../middlewares/apiKey");

router.get("/products", (req, res) =>
  res.render("products", {
    title: "My Product page",
  })
);
// apiKeyMiddleWare
router.get("/api/products",  (req, res) => {
  res.json(products);
});
router.post("/api/products", (req, res, next) => {
  // try {
  //   console.log(city);
  // } catch (err) {
  //   next(ErrorHandler.serverError(err.message));
  // }
  const { name, price } = req.body;

  if (!name || !price) {
    next(ErrorHandler.validationError("Name and price fields are required"));
    // return res.status(422).json({ error: "All fields are required" }); /// Unprocessable Entity
    // throw new Error("All fields are required");
    return;
  }
  const product = {
    name,
    price,
    id: new Date().getTime().toString(),
  };

  products.push(product);
  res.json({ product });
});

router.delete("/api/products/:prodId", (req, res) => {
  products = products.filter((prod) => req.params.prodId != prod.id);
  res.json({ status: "ok" });
});

// /pending
// router.put("/api/products/:prodId", (req, res) => {
//   products = products.map((prod) => req.params.prodId != prod.id);
//   res.json({ status: "ok" });
// });
module.exports = router;
