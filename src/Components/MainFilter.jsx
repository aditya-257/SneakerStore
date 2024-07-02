import React from "react";
import styles from "../Components/MainFilter.module.css";
import { useMainFilter } from "../Contexts/MainFilterContext";
export const MainFilter = () => {
  const { dispatch } = useMainFilter();

  return (
    <>
      <div className={`${styles.FilterContainer}`}>
       
      <div className={`${styles.category}`}>
      <div className={`${styles.FilterHeader}`}>
            <button onClick={() => dispatch({ type: "CLEAR" })}>
              Clear Filters
            </button>
          </div>
            <h3 className={`${styles.chead}`}>Category</h3>
            <div>
              <input type="radio" name="category" id="airforcec" value="airforce" onChange={() => dispatch({ type: 'AIR_FORCE', payload: 'airforce' })} />
              <label htmlFor="airforcec"> Air Force</label>
            </div>
            <div>
              <input type="radio" name="category" id="jordansc" value="jordans" onChange={() => dispatch({ type: 'JORDANS', payload: 'jordans' })} />
              <label htmlFor="jordansc"> Jordans</label>
            </div>
            <div>
              <input type="radio" name="category" id="craterc" onChange={() => dispatch({ type: 'CRATER', payload: 'crater' })} />
              <label htmlFor="craterc"> Craters</label>
            </div>
          </div>
          <div className={`${styles.rating}`}>
            <h3 className={`${styles.ratin}`}> Rating</h3>
            <div>
              <input
                type="radio"
                name="star"
                id="4star"
                onChange={() => dispatch({ type: "RATING", payload: 4 })}
              />
              <label htmlFor="4star"> 4 Stars & Above</label>
            </div>
            <div>
              <input
                type="radio"
                name="star"
                id="3star"
                onChange={() => dispatch({ type: "RATING", payload: 3 })}
              />
              <label htmlFor="3star"> 3 Stars & Above</label>
            </div>
            <div>
              <input type="radio" name="star" id="2star" />
              <label htmlFor="2star"> 2 Stars & Above</label>
            </div>
            <div>
              <input type="radio" name="star" id="1star" />
              <label htmlFor="1star"> 1 Stars & Above</label>
            </div>
          </div>
          <div className={`${styles.SortBy}`}>
            <h3 className={`${styles.sortin}`}>Sort By</h3>
            <div>
              <input
                type="radio"
                name="sort"
                id="lth"
                onChange={() => dispatch({ type: "SORT_LOW" })}
              />
              <label htmlFor="lth"> Price-Low to High</label>
            </div>
            <div>
              <input
                type="radio"
                name="sort"
                id="htl"
                onChange={() => dispatch({ type: "SORT_HIGH" })}
              />
              <label htmlFor="htl"> Price-High to Low</label>
            </div>
            <div>
              <input
                type="radio"
                name="stock"
                id="instock"
                onChange={() => dispatch({ type: "IN_STOCK" })}
              />
              <label htmlFor="instock"> In Stock</label>
            </div>
            <div>
              <input
                type="radio"
                name="stock"
                id="Fd"
                onChange={() => dispatch({ type: "FAST_DELIVERY" })}
              />
              <label htmlFor="Fd"> Fast Delivery</label>
            </div>
          </div>
        </div>
      
    </>
  );
};