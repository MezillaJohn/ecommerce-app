import List from "../../components/List/List";
import { useState } from "react";
import "./Products.scss";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Products = () => {
  const catId = useParams().id;
  const [categoryItem, setCategoryItem] = useState([]);

  // api url
  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][title][$eq]=${catId}`
  );

  // price filter
  const [maxPrice, setMaxPrice] = useState(1000);
  const priceFilterHandler = (e) => {
    setMaxPrice(e.target.value);
  };

  //sort by
  const [sort, setSort] = useState("asc");
  const lowestPrice = () => {
    setSort("asc");
  };
  const highestPrice = () => {
    setSort("desc");
  };

  // category filter logic
  const categoryHandler = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    setCategoryItem(
      isChecked
        ? [...categoryItem, value]
        : categoryItem.filter((item) => item !== value)
    );
  };

  return (
    <div className="catProducts">
      <div className="left">
        <div className="filterItems">
          <h4>Categories</h4>
          {data.map((item) => {
            return (
              <div key={item.id} className="inputItem">
                <label className="catLabel" htmlFor={item.id}>
                  {item.attributes.title}
                  <input
                    type="checkbox"
                    id={item.id}
                    value={item.id}
                    onChange={categoryHandler}
                  />
                  <span className="geekmark"></span>
                </label>
              </div>
            );
          })}
        </div>
        <div className="filterItems">
          <h4>Filter by Price</h4>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={priceFilterHandler}
            />
            <span>${maxPrice}</span>
          </div>
        </div>
        <div className="filterItems">
          <h4>Sort by</h4>
          <div className="inputItem">
            <label className="sortLabel" htmlFor="asc">
              Lowest Price
              <input
                type="radio"
                id="asc"
                value="a"
                name="price"
                onChange={lowestPrice}
              />
              <span className="checkmark"></span>
            </label>
          </div>
          <div className="inputItem">
            <label className="sortLabel" htmlFor="desc">
              Highest Price
              <input
                type="radio"
                id="desc"
                value="b"
                name="price"
                onChange={highestPrice}
              />
              <span className="checkmark"></span>
            </label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className="catImg"
          src="https://ae01.alicdn.com/kf/S93586f5b50984da5ad6ccb95279dac37C.jpg_Q90.jpg_.webp"
          alt=""
        />
        <List
          maxPrice={maxPrice}
          sort={sort}
          catId={catId}
          catItem={categoryItem}
        />
      </div>
    </div>
  );
};

export default Products;
