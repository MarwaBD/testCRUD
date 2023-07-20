import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function ProductDetails() {
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

  return (
    <div
      className="d-flex vh-100  justify-content-center align-items-center"
      style={{ backgroundColor: "#eef0f1" }}
    >
      <div className="w-50 bg-white rounded p-3">
        <form>
          <h2 style={{ color: "#314a75", marginBottom: "20px" }}>
            {" "}
            Détail du produit
          </h2>
          <div className="mb-2">
            <h3 style={{ color: "green" }}>Nom</h3>
            <div>
              <h4>{name}</h4>
            </div>
          </div>
          <div className="mb-2">
            <h3 style={{ color: "green" }}>Prix</h3>
            <div>
              <h4>{price} €</h4>
            </div>
          </div>
          <div className="mb-2">
            <h3 style={{ color: "green" }}>Quantité</h3>
            <div>
              <h4>{quantity} KG</h4>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductDetails;
