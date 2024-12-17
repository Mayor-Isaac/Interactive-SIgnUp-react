import React, { useContext } from "react";
import { DetailsContext } from "../DetailsContext";

export default function Contact() {
  const { email, telephone, setEmail, setTelephone } =
    useContext(DetailsContext);

  const details = ["Email", "Telephone"];

  function handleContact(e) {
    e.preventDefault();
    e.target.name === "telephone"
      ? setTelephone(e.target.value)
      : setEmail(e.target.value);
  }

  return (
    <div className="contact">
      <h1>Contact Info:</h1>
      {details.map((pos, i) => (
        <div>
          <form>
            <p>{pos}</p>
            <input
              type={i === 0 ? "email" : "tel"}
              name={i === 0 ? "email" : "telephone"}
              value={i === 0 ? email : telephone}
              onChange={handleContact}
            />
          </form>
        </div>
      ))}
    </div>
  );
}
