import React from "react";
import "./List.scss";
import ProductCard from "../ProductCard/ProductCard";
import useFetch from "../../hooks/useFetch";
import Spinner from "../../Ui/Spinner";

const List = ({ sort, catId, maxPrice, catItem }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][title]=${catId}${catItem.map(
      (item) => {
        return `&[filters][sub_categories][id][$eq]=${item}`;
      }
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  );

  return (
    <div className="list">
      {error ? (
        "Something went wrong"
      ) : loading ? (
        <Spinner />
      ) : (
        data?.map((item) => {
          return <ProductCard key={item.id} item={item} />;
        })
      )}
    </div>
  );
};

export default List;
