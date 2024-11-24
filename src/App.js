import React, { useState } from "react";
import "./index.css";
import { Completed } from "./Completed";
import { Submit } from "./Submit";
const tabs = ["Name", "Contact", "Birth", "Submit"];
export default function App() {
  const [stage, setStage] = useState(0);
  return (
    <div className="app">
      <div className="container">
        <h2 className="center bokor-regular completed">
          {stage < tabs.length ? "Signup Form" : "Congratulations"}
        </h2>
        <Tab stage={stage} setStage={setStage} />
      </div>
    </div>
  );
}

function Tab({ stage, setStage }) {
  // STATES
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [date, setDate] = useState("");
  const [gender, setGender] = useState("Male");

  // CTA
  function handlePrevPage() {
    if (stage === tabs.length) {
      setFirstName("");
      setLastName("");
      setEmail("");
      setTelephone("");
      setDate("");
      setGender("Male");
      setStage(0);
    } else setStage(stage - 1);
  }
  function handleNextPage() {
    if (stage === 0) {
      if (!lastName || !firstName) return;
    }
    if (stage === 1) {
      if (!email || !telephone) return;
    }
    if (stage === 2) {
      if (!date || !gender) return;
    }
    setStage(stage + 1);
  }
  return (
    <div className="main">
      {stage < tabs.length ? (
        <>
          <div className="flex">
            {tabs.map((tab, i) => (
              <h4 className={stage >= i + 1 ? "tab completed" : "tab"}>
                {tab}
              </h4>
            ))}
          </div>
          <div className="flex tab-btns">
            {tabs.map((_, i) => (
              <div
                className={
                  stage >= i + 1 ? "tab-btn tab-btn-completed" : "tab-btn"
                }
              >
                {i + 1}
              </div>
            ))}
          </div>
        </>
      ) : null}
      <main>
        {stage === 0 && (
          <Name
            setFirstName={setFirstName}
            setLastName={setLastName}
            firstName={firstName}
            lastName={lastName}
          />
        )}
        {stage === 1 && (
          <Contact
            setTelephone={setTelephone}
            setEmail={setEmail}
            telephone={telephone}
            email={email}
          />
        )}
        {stage === 2 && (
          <Birth
            date={date}
            setDate={setDate}
            gender={gender}
            setGender={setGender}
          />
        )}
        {stage === 3 && (
          <Submit
            firstName={firstName}
            lastName={lastName}
            email={email}
            telephone={telephone}
            gender={gender}
            date={date}
          />
        )}
        {stage === 4 && <Completed firstName={firstName} />}
      </main>
      {/* CALL TO ACTION */}
      <div className="btn bokor-regular">
        {stage > 0 ? (
          <div className="prev" onClick={handlePrevPage}>
            {stage === tabs.length ? "RESET" : "PREVIOUS"}
          </div>
        ) : null}
        {stage < tabs.length && (
          <div className="next" onClick={handleNextPage}>
            {stage === tabs.length - 1 ? "SUBMIT" : "NEXT"}
          </div>
        )}
      </div>
    </div>
  );
}
function Name({ setFirstName, setLastName, firstName, lastName }) {
  const details = ["First", "Last"];
  function handleBasicInfo(e) {
    e.preventDefault();
    // console.log(e);
    e.target.name === "firstName"
      ? setFirstName(e.target.value)
      : setLastName(e.target.value);
  }
  return (
    <div className="name">
      <h1>Basic Info:</h1>
      {details.map((pos, i) => (
        <div>
          <form>
            <p>{pos} Name</p>
            <input
              type="text"
              // {i === 0 ? {name="firstName",value = firstName} : (name="lastName",value = lastName) }
              name={i === 0 ? "firstName" : "lastName"}
              value={i === 0 ? firstName : lastName}
              onChange={handleBasicInfo}
            />
          </form>
        </div>
      ))}
    </div>
  );
}
function Contact({ email, telephone, setEmail, setTelephone }) {
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
function Birth({ date, setDate, gender, setGender }) {
  function handleDate(e) {
    setDate(e.target.value);
  }
  function handleGender(e) {
    setGender(e.target.value);
  }
  return (
    <div className="birth">
      <h1>Date of Birth:</h1>
      <form>
        <div>
          <p>Date</p>
          <input type="date" name="" value={date} onChange={handleDate} />
        </div>
        <div>
          <p>Gender</p>
          <select onChange={handleGender}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
      </form>
    </div>
  );
}
