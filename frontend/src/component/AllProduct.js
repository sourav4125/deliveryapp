import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardFeature from "./CardFeature";
import FilterProduct from "./FilterProduct";

const AllProduct = ({ heading }) => {
 // it  is using a selector function that takes in the current state and returns an array of products.
  const productData = useSelector((state) => state.product.productList);
  //it will iterate through the productData and create a new Set of category objects.
  const categoryList = [...new Set(productData.map((el) => el.category))];
  

  //filter data display
  const [filterby, setFilterBy] = useState("");
  const [dataFilter, setDataFilter] = useState([]);

  useEffect(() => {
    setDataFilter(productData);
  }, [productData]);

  // it is trying to filter the products by category.
  const handleFilterProduct = (category) => {
    // It then filters out  one item from the list using a function called setDataFilter().
    setFilterBy(category)
    // sets the filter by category, then it filters out all products from the product data that do not match the category passed in.
    const filter = productData.filter(
      (el) => el.category.toLowerCase() === category.toLowerCase()
    );
    setDataFilter(() => {
      // it wil show the filter products only
      return [...filter];
    });
  };

  const loadingArrayFeature = new Array(10).fill(null);

  return (
    <div className="my-5">
      <h2 className="font-bold text-2xl text-slate-800 mb-4">{heading}</h2>

      <div className="flex gap-4 justify-center overflow-scroll scrollbar-none">
        {categoryList[0] ? (
          categoryList.map((el) => {
            return (
              <FilterProduct
                category={el}
                key={el}
                isActive={el.toLowerCase() === filterby.toLowerCase()}
                onClick={() => handleFilterProduct(el)}
              />
            );
          })
        ) : (
          <div className="min-h-[150px] flex justify-center items-center">
            <p>Loading...</p>
          </div>
        )}
      </div>

      <div className="flex flex-wrap justify-center gap-4 my-4">
        {dataFilter[0]
          ? dataFilter.map((el) => {
              return (
                <CardFeature
                  key={el._id}
                  id={el._id}
                  image={el.image}
                  name={el.name}
                  category={el.category}
                  price={el.price}
                />
              );
            })
          : 
          // has a loading indicator and is being filtered by the dataFilter array.
          loadingArrayFeature.map((el,index) => (
              <CardFeature loading="Loading..." key={index+"allProduct"} />
            ))}
      </div>
    </div>
  );
};

export default AllProduct;
