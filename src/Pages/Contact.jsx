import React, { useState } from "react";
import styles from "./Styles/Contact.module.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    if (
      name.length < 3 ||
      mail.length <= 3 ||
      phone.length < 10 ||
      message.length < 25
    ) {
      e.preventDefault();
      return false;
    } else {
      e.preventDefault();
      alert(
        "Successfully submitted the form\n" +
          "Name: " +
          name +
          "\n" +
          "Email: " +
          mail +
          "\n" +
          "Phone Number: " +
          phone +
          "\n" +
          "Message: " +
          message
      );
      setName("");
      setMail("");
      setPhoneNumber("");
      setMessage("");
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.Blob}>
        <form action="" className={styles.formInput} onSubmit={handleSubmit}>
          <label className={styles.inputManager}>
            <span>Name</span>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Input should be 3 or more characters"
            />
          </label>
          <label className={styles.inputManager}>
            <span>Email</span>
            <input
              type="email"
              value={mail}
              onChange={(e) => {
                setMail(e.target.value);
              }}
              placeholder="Input must contain '@' and '.'"
            />
          </label>
          <label className={styles.inputManager}>
            <span>Phone Number</span>
            <input
              type="tel"
              value={phone}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
              placeholder="Input should be 10 characters"
            />
          </label>
          <label className={styles.inputManager}>
            <span>Message</span>
            <textarea
              name="textArea"
              id="textInput"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              placeholder="Input should be 25 or more characters"
            ></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
