import React, { useEffect, useState } from "react";

const Shop = ({setSaved}) => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=20")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });
  }, []);

  const saveItem = (dataItem) => {
    setSaved((prevDataItem) => {
      return [...prevDataItem, dataItem].filter(
        (item, idx, arr) => arr.indexOf(item) === idx
      );
    });
  };

  return (
    <section className="shop">
      <div className="container">
        <div className="shop__wrapper">
          <div className="shop__title">
            <h2 className="title2">Our Shop</h2>
          </div>
          <ul className="shop__list">
            {data?.map((dataItem) => (
              <li key={dataItem?.title} className="shop__item">
                <div className="shop__item_image">
                  <img src={dataItem?.image} alt="" />
                </div>
                <div className="shop__item_title">
                  <span>{dataItem?.title}</span>
                </div>
                <div className="shop__item_price">
                  <span>
                    <strong>Our price:</strong> {dataItem?.price} $
                  </span>
                </div>
                <div className="shop__item_button">
                  <button onClick={() => saveItem(dataItem)}>
                    Add to cart
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Shop;
