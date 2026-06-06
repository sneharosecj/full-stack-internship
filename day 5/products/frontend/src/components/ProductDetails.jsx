import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data.product))
      .catch(err => console.error(err));
  }, [id]);

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (!confirmDelete) return;

    await fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
    });

    alert("Product deleted");
    navigate("/products");
  };

  if (!product) return <p className="text-center">Loading...</p>;

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
      <img src={product.image} alt={product.name} className="h-48 mx-auto mb-4" />
      <p className="text-lg font-semibold">₹ {product.price}</p>
      <p className="mt-2 text-gray-600">{product.description}</p>

      <div className="flex gap-4 mt-6">
        <button
          onClick={() => navigate(`/edit-product/${id}`)}
          className="flex-1 bg-blue-600 text-white py-2 rounded"
        >
          Edit
        </button>

        <button
          onClick={handleDelete}
          className="flex-1 bg-red-600 text-white py-2 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;