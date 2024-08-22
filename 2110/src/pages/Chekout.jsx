import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const [firstName, setFirstName] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  const handleOrderSubmit = async () => {
    const orderData = {
      firstName,
      address,
      subtotal: 5779.83, // Example values, replace with dynamic data
      shipping: 5.00,
      tax: 577.98,
      total: 6362.81
    };

    try {
      const response = await fetch('https://strapi-store-server.onrender.com/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: orderData }),
      });

      if (response.ok) {
        navigate('/orders'); 
      } else {
        console.error('Failed to place order');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Place Your Order</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
          <div className="form-control mb-4">
            <label className="label">First Name</label>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="input input-bordered"
            />
          </div>
          <div className="form-control mb-4">
            <label className="label">Address</label>
            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="bg-base-200 p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="text-lg mb-2">Subtotal: $5,779.83</div>
          <div className="text-lg mb-2">Shipping: $5.00</div>
          <div className="text-lg mb-2">Tax: $577.98</div>
          <div className="text-lg font-bold mt-4">Order Total: $6,362.81</div>
        </div>
      </div>
      <button onClick={handleOrderSubmit} className="btn btn-primary mt-8">
        PLACE YOUR ORDER
      </button>
    </div>
  );
};

export default Checkout;
