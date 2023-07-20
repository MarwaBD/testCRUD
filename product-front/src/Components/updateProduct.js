import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function UpdateProduct() {
  const { id } = useParams();
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/getProduct/" + id)
      .then((result) => {
        console.log(result);
        setName(result.data.name);
        setPrice(result.data.price);
        setQuantity(result.data.quantity);
      })
      .catch((err) => console.log(err));
  }, []);

  const Update = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:5000/updateProduct/" + id, {
        name,
        price,
        quantity,
      })
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
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={Update}>
          <h2> Modifier produit</h2>
          <div className="mb-2">
            <label>Nom</label>
            <input
              type="text"
              placeholder="Entrez le nom du produit"
              className="form-control"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label>Prix</label>
            <input
              type="text"
              placeholder="Entrez le prix du produit"
              className="form-control"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label>Quantité</label>
            <input
              type="text"
              placeholder="Entrez la quantité disponible du produit"
              className="form-control"
              required
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <button className="btn btn-success">Valider</button>
          <Link to="/" className="btn btn-danger">
            Annuler
          </Link>
        </form>
      </div>
    </div>
  );
}

export default UpdateProduct;
