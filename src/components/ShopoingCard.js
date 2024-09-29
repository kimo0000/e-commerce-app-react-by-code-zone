import './ShopingCard.css';
import {useState, useEffect} from 'react';
import ShowProduct from './ShowProducts';

function ShopingCard() {

    const ApiURL = "https://fakestoreapi.com/products";

    const [data, setData] = useState([]);
    const [category, setCategory] = useState([]);
    const [isActive, setIsActive] = useState(null);
    const [price, setPrice] = useState("0");
    const [status, setStatus] = useState(false);

    const getAllProducts = () => {
      fetch(ApiURL)
        .then((res) => res.json())
        .then((products) => setData(products));

        setIsActive(null);
    }

    const getCategoryName = () => {
      fetch(`${ApiURL}/categories`)
        .then((res) => res.json())
        .then((data) => setCategory(data));
    }

    
    // console.log(data);
    
    useEffect(() => {
      getAllProducts();
      getCategoryName();
    }, []);
    
    const getByCategory = (itemName, index) => {
      fetch(`${ApiURL}/category/${itemName}`)
        .then((res) => res.json())
        .then((data) => setData(data));
      //  setSearch(innerTextValue);
      setIsActive(index);
      setStatus(false);
    };

    console.log(isActive);

    const SearchByPrice = (value) => {
      setPrice(value);
      setStatus(true);
    }

    const allProductsByPrice = data
      .filter((item) => (Number(item.price) >= Number(price) ? item : null))
      .map((product) => (
        <ShowProduct key={product.id} product={product} showButton={true} />
      ));

    
    return (
      <>
        <div className="shopping_card">
          <div className="btns">
            <button
              className={isActive === null ? "active" : ""}
              onClick={getAllProducts}
            >
              All
            </button>
            {category.map((item, index) => {
              return (
                <>
                  <button
                    key={index}
                    className={isActive === index ? "active" : ""}
                    onClick={(e) => getByCategory(item, index)}
                  >
                    {item}
                  </button>
                </>
              );
            })}
          </div>

          <form className="form">
            {/* <label htmlFor="">0$</label> */}
            <input
              type="range"
              min="0"
              max="1000"
              step="1"
              onChange={(e) => SearchByPrice(e.target.value)}
            />
            {/* <label htmlFor="">1000$</label> */}
            <span
              className={status ? "slideValue show" : "slideValue"}
              style={{ left: price / 10 - 17 + "%" }}
            >
              {price + " $"}
            </span>
          </form>

          <ul className="products">{allProductsByPrice}</ul>
        </div>
      </>
    );
}

export default ShopingCard;