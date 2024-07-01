import React, { useEffect, useState } from "react";
import styles from "./Styles/Parks.module.css";

export default function Parks() {
  const [num, setNum] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setNum(Math.round(Math.random(1, 5) * 7.5).toString());
    async function getData() {
      const url =
        "http://localhost:8888/Project/urban_oasis/src/Connections/Parks.php";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error.message);
      }
    }

    getData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const filteredParks = data ? data.filter((park) => park.Park_ID === num) : [];
  console.log(num);

  return (
    <div className={styles.totalDisplay}>
      {filteredParks.length > 0 ? (
        <div className={"randomContainer"}>
          {filteredParks.map((park) => (
            <div key={park.Park_ID} className={styles.randomPark}>
              <p>Randomly Chosen:</p>
              <h2>{park.Park_Name}</h2>
              <p>Location: {park.Location}</p>
              {/* <img src={park.ImageUrl} alt={park.Park_Name} /> */}
            </div>
          ))}
        </div>
      ) : (
        <div className={"randomContainer"}>
          <h2>No park for you {"<"}3</h2>
        </div>
      )}
      {data ? (
        <div className={styles.allParksTable}>
          {data.map((park) => (
            <div key={park.Park_ID} className={styles.park}>
              <h2>{park.Park_Name}</h2>
              <p>Location: {park.Location}</p>
              <button>Look into it</button>
            </div>
          ))}
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}
