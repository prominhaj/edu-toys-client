/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Search from "../../Components/Search/Search";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { Spinner } from "@chakra-ui/react";

const AllToys = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto px-5">
      {loading && (
        <div className="text-center my-3">
          <Spinner color="red.500" />
        </div>
      )}
      <Search></Search>
      <div className="text-center">
        <h4 className="text-2xl">Total Product: {products.length}</h4>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:py-10 py-5">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            setLoading={setLoading}
            shopPage={true}
          ></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default AllToys;
