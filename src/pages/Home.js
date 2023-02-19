import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  // console.log(products);

  const state = useSelector((state) => state)
  console.log(state);
  return (
    <div>
      <h1 className="text-center">This is home page</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
        {products?.map((product, idx) => <ProductCard key={idx} product={product} />)}
      </div>
    </div>
  );
};

export default Home;
