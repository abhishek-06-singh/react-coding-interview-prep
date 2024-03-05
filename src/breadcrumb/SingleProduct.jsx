import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";
import BreadCrumb from "./BreadCrumb";
const SingleProduct = () => {
  const { pathName } = useLocation();
  console.log(pathName);
  const { id } = useParams();
  const [productMain, setProducts] = useState([]);
  console.log(productMain);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${id}`
        );
        const slicedProduct = response.data;
        setProducts(slicedProduct);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="mt-20 justify-center items-center flex flex-col">
        <h1 className="text-3xl font-bold text-indigo-900"> Product Page</h1>
        <p> Welcome to the store </p>
        <BreadCrumb />
      </div>

      <div className="p-20 flex flex-col lg:flex-row space-x-10">
        <img src={productMain.thumbnail} alt="" />
        <div className="flex flex-col my-auto">
          <h2 className="text-3xl font-bold">{productMain.title}</h2>
          <h3 className="text-green-500 text-2xl ">${productMain.price}</h3>
          <p>{productMain.description}</p>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
