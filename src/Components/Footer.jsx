import React from "react";
import styles from "./Styles/Footer.module.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className={styles.fullFooter}>
      <div className={styles.mainSection}>
        <div className={styles.leftSection}>
          <h5>About Urban Oasis</h5>
          <p>
            Urban Oasis is dedicated to creating serene green spaces within
            urban environments. Our mission is to enhance city living by
            providing accessible oases of tranquility where you can relax,
            exercise, and connect with nature. Join us in our efforts to bring
            more green into our urban landscapes.
          </p>
        </div>
        <div className={styles.rightSection}>
          <h5>Contact Us</h5>
          <ul>
            <li>
              Email: <Link to={"/"}>info@urbanoasis.com</Link>
            </li>
            <li>
              Phone: <Link to={"/"}>+123-456-7890</Link>
            </li>
            <li>
              Address: <Link to={"/"}>123 Greenway Blvd, Cityville</Link>
            </li>
          </ul>
          <p>Follow us on social media for the latest updates:</p>
          <ul>
            <li>Facebook: /UrbanOasis</li>
            <li>Twitter: @UrbanOasis</li>
            <li>Instagram: @UrbanOasis</li>
          </ul>
        </div>
      </div>
      <div className={styles.bottomSection}>
        <p>&#169; 2024 Urban Oasis. All rights reserved.</p>
      </div>
    </div>
  );
}
