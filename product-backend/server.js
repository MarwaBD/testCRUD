const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const ProductModel = require("./models/Product");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://new-product-mongo:27017/crud", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//mongoose.connect("mongodb://localhost:27017/crud");

app.get("/", (req, res) => {
  ProductModel.find({})
    .then((products) => res.json(products))
    .catch((err) => res.json(err));
});

app.post("/createProduct", (req, res) => {
  ProductModel.create(req.body)
    .then((products) => res.json(products))
    .catch((err) => res.json(err));
});

app.get("/getProduct/:id", (req, res) => {
  const id = req.params.id;
  ProductModel.findById({ _id: id })
    .then((products) => res.json(products))
    .catch((err) => res.json(err));
});

app.put("/updateProduct/:id", (req, res) => {
  const id = req.params.id;
  ProductModel.findByIdAndUpdate(
    { _id: id },
    { name: req.body.name, price: req.body.price, quantity: req.body.quantity }
  )
    .then((products) => res.json(products))
    .catch((err) => res.json(err));
});

app.delete("/deleteProduct/:id", (req, res) => {
  const id = req.params.id;
  ProductModel.findByIdAndDelete({ _id: id })
    .then((res) => res.json(res))
    .catch((err) => res.json(err));
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
