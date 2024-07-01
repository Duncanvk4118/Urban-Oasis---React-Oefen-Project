import React from "react";
import styles from "./Styles/Home.module.css";
import cityImg from "../Images/City.jpeg";
import parkImg from "../Images/Park.jpeg";
import TowerImg from "../Images/Towers.jpeg";

export default function Home() {
  const paragraphs = document.querySelectorAll("section");
  document.addEventListener("scroll", () => {
    paragraphs.forEach((p) => {
      if (window.scrollY + window.innerHeight > p.offsetTop) {
        p.classList.add("active");
      } else {
        p.classList.remove("active");
      }
    });
  });

  return (
    <div className={styles.homePage}>
      {/* Top Section */}

      <section className={styles.top}>
        <div className={styles.generalText}>
          <h1>Welcome to Urban Oasis</h1>
          <p>
            Discover a serene escape in the heart of the city. Urban Oasis is
            your go-to destination for finding tranquility amidst the urban
            hustle. Explore our curated green spaces, stay updated with local
            wellness events, and immerse yourself in a community that values
            nature and well-being.
          </p>
        </div>
        <div className={styles.topImg}>
          <img src={cityImg} alt="" />
        </div>
      </section>

      {/* Middle Section */}

      <section className={styles.mid}>
        <div className={styles.midImg}>
          <img src={parkImg} alt="" />
        </div>
        <div className={styles.generalText}>
          <h1>Explore Local Parks</h1>
          <p>
            Our interactive map helps you find nearby parks and green spaces
            where you can relax, exercise, and reconnect with nature. Each park
            is a little oasis offering unique features and activities. Click on
            any location to learn more about what each park has to offer and
            plan your visit.
          </p>
        </div>
      </section>

      {/* Bottom Section */}

      <section className={styles.bot}>
        <div className={styles.generalText}>
          <h1>Urban Oasis Parks</h1>
          <p>
            Urban Oasis is dedicated to creating and maintaining accessible
            green spaces throughout the city. From pocket parks to expansive
            urban gardens, each of our parks is designed to enhance your urban
            living experience. Explore our map to discover hidden gems and
            peaceful retreats in your neighborhood.
          </p>
        </div>
        <div className={styles.botImg}>
          <img src={TowerImg} alt="" />
        </div>
      </section>
    </div>
  );
}
