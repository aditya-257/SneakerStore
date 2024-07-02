import React from 'react'
import Hero from '../Components/Hero'
import { FeaturedProducts } from '../Components/FeaturedProducts'
import styles from "../Pages/HomePage.module.css";
export const HomePage = () => {
  return (
   <>
   <Hero/>
   <FeaturedProducts/>
   <div class={`${styles.gallery}`}>
     
        <div class={`${styles.galleryItem}`} > 
            <h1 class={`${styles.galleryTitle}`}>Be Yourself!</h1>
            <img src="https://images.pexels.com/photos/9295809/pexels-photo-9295809.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500" alt="" class={`${styles.galleryImg}`}/>
        </div>
        <div class={`${styles.galleryItem}`}>
            <img src="https://images.pexels.com/photos/1040427/pexels-photo-1040427.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500" alt="" class={`${styles.galleryImg}`}/>
            <h1 class={`${styles.galleryTitle}`}>This is the First Day of Your New Life</h1>
        </div>
        <div class={`${styles.galleryItem}`}>
            <h1 class={`${styles.galleryTitle}`}>Just Do it!</h1>
            <img src="https://images.pexels.com/photos/7856965/pexels-photo-7856965.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500" alt="" class={`${styles.galleryImg}`}/>
        </div>
    </div>
   </>
  )
}

