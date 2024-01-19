/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Search from "../../Components/Search/Search";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { Spinner } from "@chakra-ui/react";
import { Pagination } from "flowbite-react";

const AllToys = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Pagination
  const [total, setTotal] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page) => setCurrentPage(page);
  const totalPage = Math.ceil(total / itemsPerPage);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://edu-toys-server-zeta.vercel.app/products?page=${currentPage}&limit=${itemsPerPage}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });

    // Product Total
    fetch("https://edu-toys-server-zeta.vercel.app/totalproduct")
      .then((res) => res.json())
      .then((data) => setTotal(data.total));
  }, [currentPage, itemsPerPage]);

  const handleSearch = (e) => {
    setLoading(true);
    e.preventDefault();
    const search = e.target.search.value;
    // All Data Load
    fetch("https://edu-toys-server-zeta.vercel.app/all-products")
      .then((res) => res.json())
      .then((data) => {
        const searchProducts = data.filter((p) =>
          p.name.toLowerCase().includes(search.toLowerCase())
        );
        setProducts(searchProducts);
        setLoading(false);
      });
    e.target.search.value = "";
    if (search) {
      setProducts(products);
    }
  };
  return (
    <div className="container mx-auto px-5">
      {loading && (
        <div className="text-center my-3">
          <Spinner color="red.500" />
        </div>
      )}
      <Search handleSearch={handleSearch}></Search>
      <div className="text-center">
        {
          products.length === 0 ? <h4 className="text-3xl">No Found Product</h4> : <h4 className="text-2xl">Total Product: {products?.length}</h4>
        }
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:py-10 py-5">
        {products?.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            setLoading={setLoading}
            shopPage={true}
          ></ProductCard>
        ))}
      </div>
      <div className="text-center pb-10">
        {
          products.length === 0 ?  <></> : <Pagination
          currentPage={currentPage}
          totalPages={totalPage}
          onPageChange={onPageChange}
        />
        }
      </div>
    </div>
  );
};

export default AllToys;
