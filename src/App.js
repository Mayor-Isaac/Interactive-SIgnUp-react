import React, { useState } from "react";
import "./index.css";
import Completed from "./Components/Completed";
import Submit from "./Components/Submit";
import Birth from "./Components/Birth";
import Contact from "./Components/Contact";
import Name from "./Components/Name";
import Button from "./Components/Button";
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
    // if (stage === 1) {
    //   if (!email || !telephone) return;
    // }
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
          <Button handleFunc={handlePrevPage} classGiven="prev">
            {stage === tabs.length ? "RESET" : "PREVIOUS"}
          </Button>
        ) : null}
        {stage < tabs.length && (
          <Button handleFunc={handleNextPage} classGiven="next">
            {stage === tabs.length - 1 ? "SUBMIT" : "NEXT"}
          </Button>
        )}
      </div>
    </div>
  );
}
