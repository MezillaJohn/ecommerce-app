import React from "react";
import Section from "../../Ui/Section";
import { Link } from "react-router-dom";
import "./Category.scss";
import Container from "../../Ui/Container";

const categories = [
  {
    id: 1,
    img: "https://ae01.alicdn.com/kf/S9aedb4f797a84cdebe753fe30c9c09e5M/2022-Shorts-Shaper-Panties-Sexy-Hip-lifting-Pant-Solod-Color-Shorts-Pants-Women-Push-Up-Butt.jpg_Q90.jpg_.webp",
    title: "Women",
    to: "./products/women",
  },

  {
    id: 2,
    img: "https://ae01.alicdn.com/kf/S2c4f2495de914bdebfc0d1e9d8762677a/New-Fur-One-Piece-Men-s-Coat-Thickened-Medium-Length-Leather-Jacket-European-And-American-Men.jpg_Q90.jpg_.webp",
    title: "Men",
    to: "./products/men",
  },
  {
    id: 3,
    img: "https://ae01.alicdn.com/kf/S8e9681f1adc941579aa80b135fc9c80cX/Cute-Baby-Girls-Dress-Kids-Minnie-Mouse-Dress-Carnival-Party-Costumes-Christmas-Clothing-Children-Disney-Series.jpg_Q90.jpg_.webp",
    title: "Children",
    to: "./products/children",
  },
];

const Category = () => {
  return (
    <Section className="sectionn">
      <Container>
        <div className="categories">
          <div className="top">
            <h2> Exclusive Category</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis non
              earum libero temporibus.
            </p>
          </div>
          <div className="bottom">
            {categories.map((category) => {
              return (
                <Link key={category.id} to={category.to}>
                  <div className="category">
                    {" "}
                    <button> {category.title} </button>
                    <img src={category.img} alt="fashion" />
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

export default Category;
