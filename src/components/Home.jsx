import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
const Home = () => {

    const [product,setProduct] = useState([]);
    const getData = async ()=>{
        const res = await axios.get("https://fakestoreapi.com/products")
        setProduct(res.data);
        console.log(res.data)
    }

    useEffect (()=>{
            getData();
    },[])
  return (
    <div className=''>
         <div className="container my-4">
      <div className="row">
        {product.map((item) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={item.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={item.image}
                className="card-img-top"
                alt={item.title}
                style={{ objectFit: 'cover', height: '200px' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{item.title}</h5>
                <p>{item.category}</p>
                <p className="card-text text-muted">${item.price}</p>
                <Link to={`/view/${item.id}`} className="btn btn-primary">
                  View Details
                </Link>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Home
