import { React, useState } from "react";
import styles from "./Styles/Contact.module.css";

export default function Contact() {
  const [name, setName] = useState(null);
  const [mail, setMail] = useState(null);
  const [phone, setPhoneNumber] = useState(null);
  const [message, setMessage] = useState(null);
  return (
    <div className={styles.main}>
      <div className={styles.Blob}>
        <form action="" className={styles.formInput}>
          <label className={styles.inputManager}>
            <span>Name</span>
            <input
              type="text"
              onKeyUp={(e) => {
                setName(e.target.value);
              }}
            />
          </label>
          <label className={styles.inputManager}>
            <span>Email</span>
            <input
              type="text"
              onKeyUp={(e) => {
                setMail(e.target.value);
              }}
            />
          </label>
          <label className={styles.inputManager}>
            <span>Phone Number</span>
            <input
              type="tel"
              onKeyUp={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />
          </label>
          <label className={styles.inputManager}>
            <span>Message</span>
            <textarea
              name="textArea"
              id="textInput"
              placeholder="Typ here your message"
              onKeyUp={(e) => {
                setMessage(e.target.value);
              }}
            ></textarea>
          </label>
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              alert(
                "Successfully submitted the form" +
                  " Name: " +
                  name +
                  " Email: " +
                  mail +
                  " Phone Number: " +
                  phone +
                  " Message: " +
                  message
              );
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
