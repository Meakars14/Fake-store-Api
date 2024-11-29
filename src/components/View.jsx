import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const View = () => {
  const [view, setView] = useState({});
  const { id } = useParams(); // Correct placement of useParams

  const getData = async () => {
    try {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setView(res.data);
      console.log(res.data);
    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  };

  useEffect(() => {
    getData();
  }, [id]); // Add id as a dependency

  return (
    <div>
      <div className="container my-5">
        <div className="row">
          {/* Product Image */}
          <div className="col-12 col-md-6">
            {view.image ? (
              <img
                src={view.image}
                alt={view.title}
                className="img-fluid rounded shadow"
                style={{ maxHeight: '400px', objectFit: 'cover' }}
              />
            ) : (
              <p>Loading image...</p>
            )}
          </div>

          {/* Product Details */}
          <div className="col-12 col-md-6">
            <h1 className="mb-3">{view.title || 'Loading...'}</h1>
            <p className="text-muted mb-4">{view.description || 'Loading description...'}</p>
            <h2 className="text-primary">${view.price || 'Loading price...'}</h2>
            <div className="d-flex gap-2 mt-4">
              <button className="btn btn-primary btn-lg" disabled={!view.title}>
                Buy Now
              </button>
              <button className="btn btn-outline-secondary btn-lg" disabled={!view.title}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="row mt-5">
          <div className="col-12">
            <h3>Product Details</h3>
            <p className="text-muted">{view.longDescription || 'No additional details available.'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
