import React, { useContext, useState } from 'react';
import { ShopContext } from '../components/Context';

const Products = () => {
  const { product, setProduct } = useContext(ShopContext);
  const [alert, setAlert] = useState({ type: '', message: '' });

  const handleRemove = async (id) => {
    try {
      const res = await fetch('http://localhost:5000/product/removeproduct', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({ id }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      const data = await res.json();

      if (data.success) {
        setAlert({ type: 'success', message: 'Product removed successfully' });
        // Remove product from local state
        setProduct((prev) => prev.filter((item) => item._id !== id));
      } else {
        setAlert({ type: 'error', message: data.message || 'Failed to remove product' });
      }

      // Hide alert after 3 seconds
      setTimeout(() => setAlert({ type: '', message: '' }), 3000);
    } catch (error) {
      setAlert({ type: 'error', message: error.message || 'Failed to remove product' });
      setTimeout(() => setAlert({ type: '', message: '' }), 3000);
    }
  };

  return (
    <section className="w-full h-auto flex flex-col items-center justify-center gap-6">
      <h1 className="text-2xl font-semibold">All Products List</h1>

      {/* Alert Box */}
      {alert.message && (
        <div
          className={`w-full max-w-md text-center p-3 rounded ${
            alert.type === 'success' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'
          }`}
        >
          {alert.message}
        </div>
      )}

      {/* Table Header */}
      <div className="w-full grid grid-cols-5 justify-items-center border-2 bg-gray-200">
        <p>Name</p>
        <p>Description</p>
        <p>Price</p>
        <p>Offer Price</p>
        <p>Remove</p>
      </div>

      {/* Products */}
      {product.length === 0 ? (
        <p className="text-center mt-4">No products available</p>
      ) : (
        product.map((item, index) => {
          const { _id, name, old_price, new_price, description } = item;
          return (
            <div
              key={_id || index}
              className="w-full grid grid-cols-5 justify-items-center border-2"
            >
              <p>{name}</p>
              <p>{description}</p>
              <p>{old_price}</p>
              <p>{new_price}</p>
              <p>
                <button
                  className="text-red-500 hover:underline"
                  onClick={() => handleRemove(_id)}
                >
                  Remove
                </button>
              </p>
            </div>
          );
        })
      )}
    </section>
  );
};

export default Products;
