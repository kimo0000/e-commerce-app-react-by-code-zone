import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import './ProductDetails.css';
import ShowProduct from "./ShowProducts";


function ProductDetails(props) {
    const APIURL = "https://fakestoreapi.com/products";

    const params = useParams();

    const [product, setProduct] = useState({});
    
    useEffect(() => {
        fetch(`${APIURL}/${params.productID}`)
          .then((res) => res.json())
          .then((data) => setProduct(data));
    }, []);

    
    // const { image, title, price, description, category, rating } = product;
    
    console.log(product.id);

    return (
      <>
        <h1 className="text-center">ProductDetails: {params.productID}</h1>

        <ul className="products">
          {<ShowProduct product={product} showButton={false}/>}

          {/* <li className="details">
            <div className="image">
                <img src={image} alt="" />
            </div>
            <div className="desc">
                <h3 className="title">{title}</h3>
                <p className="price">
                    Price: <b>{price}$</b>
                </p>
                <p className="category">
                    Category: <b>{category}</b>
                </p>
                <p className="description">{description}</p>
            </div>
            <p className="rate">
                Rate: <b>{rating.rate}</b>
            </p>
            <p className="count">
                Count: <b>{rating.count}</b>
            </p>
            <button className="buy">Buy Now</button>
            </li> */}
        </ul>
      </>
    );
}

export default ProductDetails;