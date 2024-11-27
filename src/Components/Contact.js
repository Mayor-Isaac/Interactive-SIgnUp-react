import React from "react";

export default function Contact({ email, telephone, setEmail, setTelephone }) {
  const details = ["Email", "Telephone"];
  function handleContact(e) {
    e.preventDefault();
    // console.log(e);
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
