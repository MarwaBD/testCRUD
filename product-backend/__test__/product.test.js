const request = require("supertest");
const app = require("../server");
const ProductModel = require("../models/Product");

describe("Product API", () => {
  jest.setTimeout(10000);

  beforeEach(async () => {
    // Clear the database before each test
    await ProductModel.deleteMany({});
  });

  test("should create a new product", async () => {
    const newProduct = {
      name: "Test Product",
      price: 25.99,
      quantity: 10,
    };

    const response = await request(app).post("/createProduct").send(newProduct);

    // Assertions
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("_id");
    expect(response.body.name).toEqual(newProduct.name);
    expect(response.body.price).toEqual(newProduct.price);
    expect(response.body.quantity).toEqual(newProduct.quantity);

    // Check if the product is actually stored in the database
    const storedProduct = await ProductModel.findById(response.body._id);
    expect(storedProduct).toMatchObject(newProduct);
  });
});
