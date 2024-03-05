import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BreadCrumb from "./BreadCrumb";
const AllProducts = () => {
  const navigate = useNavigate();
  const [productMain, setProducts] = useState([]);
  console.log(productMain);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        const slicedProduct = response.data.products;
        setProducts(slicedProduct);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="p-20 mx-auto flex items-center flex-col">
      <h1 className="text-3xl font-bold text-indigo-900"> All Products</h1>
      <p> Welcome to the store </p>
      <BreadCrumb />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto">
        {productMain.map((products) => {
          return (
            <div
              className="p-5  mt-10 flex flex-col text-left items-center"
              key={products.id}
              onClick={() => navigate(`Single/${products.id}`)}
            >
              <img src={products.thumbnail} className="h-36 w-44" alt="" />
              <h2 className="text-xl font-semibold">{products.title}</h2>
              <p>${products.price}</p>
            </div>
          );
        })}
      </div>
      <button className="w-1/2 p-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg mt-5 font-bold">
        View all Products
      </button>
    </div>
  );
};

export default AllProducts;
