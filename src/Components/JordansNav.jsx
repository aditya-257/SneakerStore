import React from "react";
import styles from "../Components/AirforceNav.module.css";
import { FeaturedItems } from './HomePageArray';
import { Link } from "react-router-dom";
import { useCart } from "../Contexts/Cart-Context";


export const JordansNav = () => {
  const JordanItems = FeaturedItems.filter((item) => item.type === "jordans");

  const { addItem } = useCart();

  return (
    <>


      <div className={`${styles.bg}`}>
        <h1 className={`${styles.FeatHead}`}>Jordans</h1>
        <div className={`${styles.FeatProducts}`}>
          {JordanItems.map((item) => {
            const { id, Company, Itemname, url, price, cart } = item;
            return (
              <article key={id} className={`${styles.Product}`}>
                <Link to={`/singleitem/${id}`} item={item}>
                  <img
                    src={url}
                    alt={Company}
                    className={`${styles.Image}`}
                  />
                </Link>
                <div className={`${styles.profiledetails}`}>
                  <div>
                  <h3 className={`${styles.Company}`}>
                    {Company}
                  </h3>
                  </div>
                  
                  <div
                    className={`${styles.cart}`}
                    onClick={() => addItem(item)}
                  >
                    {cart}

                  </div>
                </div>

                <h4 className={`${styles.Item}`}>{Itemname}</h4>
                <p className={`${styles.PriceCart}`}>
                  <span className={`${styles.price}`}>Rs.{price} </span>

                </p>
              </article>
            );
          })}
        </div>
      </div>

    </>
  );
};
