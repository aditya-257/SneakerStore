import React from "react";
import styles from "../Components/FeaturedProducts.module.css";
import { BsCurrencyRupee } from "react-icons/bs";
import { FeaturedItems } from './HomePageArray';
import { Link } from "react-router-dom";
import { useCart } from "../Contexts/Cart-Context";
import { MainFilter } from "./MainFilter";
import { useMainFilter } from "../Contexts/MainFilterContext";


export const FeaturedProducts = () => {
  const { addItem } = useCart();
  let {tempcart,originalcart} = useMainFilter();
  if(tempcart.length=== 0){
    tempcart=originalcart.filter((item)=>item.id<=10);
  }

  return (
    <>

      <div className={`${styles.MainContainer}`}>
        <div className={`${styles.bg}`}>
          <div className={`${styles.head}`}>
            <h1 className={`${styles.FeatHead}`}>Featured Products</h1>
          </div>
          <div className={`${styles.FeatProducts}`}>
            {tempcart.map((item) => {
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
                    <span className={`${styles.price}`}>RS.{price} </span>

                  </p>
                </article>
              );
            })}
          </div>
        </div>
        <div className={`${styles.sort}`}>
         <MainFilter/>
        </div>
      </div>

    </>
  );
};
