import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([
    {
      Nom: "prod221112",
      Prix: "556",
      Quantité: "222",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000")
      .then((result) => setProducts(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:5000/deleteProduct/" + id)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter(
    (product) =>
      product?.name &&
      product?.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className="d-flex vh-100  justify-content-center align-items-center"
      style={{ backgroundColor: "#eef0f1" }}
    >
      <div className="w-50 bg-white rounded p-3">
        <Link to="/create" className="btn btn-success">
          Ajouter
        </Link>
        <div
          class="form-outline  justify-content-center  "
          style={{ marginTop: "20px" }}
        >
          <input
            type="search"
            id="form1"
            class="form-control"
            placeholder="Recherche par nom..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Prix</th>
              <th>Quantité</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => {
              return (
                <tr key={product._id}>
                  {" "}
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>
                  <td>
                    <Link
                      to={`/productDetails/${product._id}`}
                      className="btn btn-primary"
                      data-cy="product-voire-{productId}"
                      style={{ marginRight: "20px" }}
                    >
                      Voire
                    </Link>
                    <Link
                      to={`/update/${product._id}`}
                      className="btn btn-warning"
                      style={{ marginRight: "20px" }}
                    >
                      Modifier
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={(e) => handleDelete(product._id)}
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Products;
