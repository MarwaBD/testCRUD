import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function CreateProduct(props) {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/createProduct", { name, price, quantity })
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div
      className="d-flex vh-100  justify-content-center align-items-center"
      style={{ backgroundColor: "#eef0f1" }}
    >
      {" "}
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={Submit}>
          <h2> Ajouter produit</h2>
          <div className="mb-2">
            <label>Nom</label>
            <input
              type="text"
              placeholder="Entrez le nom du produit"
              className="form-control"
              data-cy="product-name-input"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label>Prix</label>
            <input
              type="number"
              step="0.01"
              placeholder="Entrez le prix du produit"
              className="form-control"
              data-cy="product-price-input"
              required
              pattern="[0-9]+(\.[0-9]+)?"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label>Quantité</label>
            <input
              type="number"
              step="0.01"
              placeholder="Entrez la quantité disponible du produit"
              className="form-control"
              data-cy="product-quantity-input"
              required
              pattern="[0-9]+(\.[0-9]+)?"
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <button className="btn btn-success" data-cy="submit-button">
            Valider
          </button>
          <Link to="/" className="btn btn-danger" data-cy="cancel-button">
            Annuler
          </Link>
        </form>
      </div>
    </div>
  );
}

export default CreateProduct;
