import React from "react";
import Section from "../../Ui/Section";
import useFetch from "../../hooks/useFetch";
import Container from "../../Ui/Container";
import { Link } from "react-router-dom";
import "./Products.scss";

const Products = () => {
  const { data, loading, error } = useFetch("/products?populate=*");
  const img =
    process.env.REACT_APP_UPLOAD_URL +
    data.attributes?.img?.data?.attributes?.url;

  return (
    <Section>
      <Container>
        <div className="products">
          <h2 className="productHeading">More to Love</h2>
          <div className="cardContainer">
            {data.map((product) => {
              return (
                <Link to={`/product/${data.id}`} key={product.id}>
                  <div key={product.id} className="cardWrapper">
                    <div className="cardHead">
                      <img
                        src={
                          process.env.REACT_APP_UPLOAD_URL +
                          product.attributes?.img?.data?.attributes?.url
                        }
                        alt="dress"
                      />
                    </div>
                    <div className="cardBody">
                      <h4> {`$${product.attributes.price}`} </h4>
                      <p className="offer"> </p>
                      <span>
                        {" "}
                        {`${product.attributes.title.slice(0, 20)}...`}{" "}
                      </span>
                      <p className="tag"> </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Products;
