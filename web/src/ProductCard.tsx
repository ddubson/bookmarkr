import * as React from "react";
import "./App.styles.scss";

interface ProductCardProps {
  title: string,
  author: string
}

const ProductCard = (props: ProductCardProps) => (
  <div className="card width-18">
    <div className="card-body">
      {props.title} - {props.author}
    </div>
  </div>
);

export default ProductCard;