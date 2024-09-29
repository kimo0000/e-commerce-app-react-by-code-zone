import "./ShowProducts.css";
import {Link} from 'react-router-dom';

function ShowProduct(props) {
   
   const {
     id,
     image,
     title,
     price,
     description,
     category
    //  rating
   } = props.product;

   const { showButton } = props;

   return (
     <>
       <li className="cards">
         <div className="image">
           <img src={image} alt="" className="pic"/>
         </div>
         <div className="container">
          <h3 className="title">{title}</h3>
          <p className="price">
            Price: <b>{price}</b>
          </p>
          <p className="description">{description}</p>
          <p className="category">
            Category: <b>{category}</b>
          </p>
         </div>
         {/* <p className="rate">
           Rate: <b>{rating.rate}</b>
         </p>
         <p className="count">
           Count: <b>{rating.count}</b>
         </p> */}
         {
            showButton &&
                <Link to={`${id}`} className="buy text-center">
                  Buy Now
                </Link>
         }
       </li>
     </>
   );
}

export default ShowProduct;