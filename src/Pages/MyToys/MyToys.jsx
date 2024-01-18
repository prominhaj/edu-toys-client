/* eslint-disable no-unused-vars */
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../AuthContext/AuthContext";
import { Rating } from "primereact/rating";
import { FaRegEdit } from "react-icons/fa";
import { Spinner } from "@chakra-ui/react";

const MyToys = () => {
  const [products, setProducts] = useState([]);
  const { user, loading, setLoading } = useContext(userContext);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/mytoys?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, [user, setLoading]);

  const imageBodyTemplate = (product) => {
    return (
      <img
        src={product.picture}
        alt=""
        className="w-[6rem] shadow-2 border-round rounded-lg"
      />
    );
  };

  const categoryBodyTemplate = (product) => {
    return <h4>{product.categoryID}</h4>;
  };

  const priceBodyTemplate = (product) => {
    return <h4>${product.price}</h4>;
  };

  const ratingBodyTemplate = (product) => {
    return (
      <Rating
        className="text-yellow-400 flex gap-1"
        value={product.ratings}
        readOnly
        cancel={false}
      />
    );
  };
  const editBodyTemplate = (product) => {
    return (
      <button className="text-gray-700 text-base font-medium font-['Inter'] leading-normal rounded-md">
        <FaRegEdit className="text-2xl" />
      </button>
    );
  };
  const deleteBodyTemplate = (product) => {
    return (
      <button className="bg-pink-600 text-white text-base font-medium font-['Inter'] leading-normal rounded-md px-3 lg:px-5 py-2">
        Delete
      </button>
    );
  };

  console.log(products);
  return (
    <div className="container mx-auto px-5">
      {loading && (
        <div className="text-center mt-4">
          <Spinner color="red.500" />
        </div>
      )}
      <div className="py-10">
        <DataTable value={products} tableStyle={{ minWidth: "60rem" }}>
          <Column field="name" header="Name"></Column>
          <Column header="Image" body={imageBodyTemplate}></Column>
          <Column
            field="price"
            header="Price"
            body={priceBodyTemplate}
          ></Column>
          <Column
            field="category"
            header="Category"
            body={categoryBodyTemplate}
          ></Column>
          <Column
            field="rating"
            header="Reviews"
            body={ratingBodyTemplate}
          ></Column>
          <Column field="edit" header="Edit" body={editBodyTemplate}></Column>
          <Column
            field="delete"
            header="Delete"
            body={deleteBodyTemplate}
          ></Column>
        </DataTable>
      </div>
    </div>
  );
};

export default MyToys;
