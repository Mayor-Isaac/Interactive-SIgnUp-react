import React, { useState } from "react";
import "./index.css";
const tabs = ["Name", "Contact", "Birth", "Submit"];
export default function App() {
  return (
    <div className="app">
      <div className="container">
        <h2 className="center">Signup Form</h2>
        <Tab />
      </div>
      {/* <ScoutX /> */}
      {/* <Form /> */}
    </div>
  );
}

function Tab() {
  const [stage, setStage] = useState(0);
  function handlePrevPage() {
    setStage(stage - 1);
  }
  function handleNextPage() {
    setStage(stage + 1);
  }
  return (
    <div className="main">
      <div className="flex">
        {tabs.map((tab, i) => (
          <h4 className={stage >= i + 1 ? "tab completed" : "tab"}>{tab}</h4>
        ))}
      </div>
      <main>
        {stage === 0 && <Name />}
        {stage === 1 && <Contact />}
        {stage === 2 && <Birth />}
        {stage === 3 && <Submit />}
        {stage === 4 && <Completed />}
        {stage === 5 && <LogIn />}
      </main>
      <div className="btn">
        {stage > 0 && stage > tabs.length ? (
          <div className="prev" onClick={handlePrevPage}>
            PREVIOUS
          </div>
        ) : null}
        {stage < tabs.length && (
          <div className="next" onClick={handleNextPage}>
            {stage > tabs.length ? "SUBMIT" : "NEXT"}
          </div>
        )}
        {stage === tabs.length && <div className="filled">Log In</div>}
      </div>
    </div>
  );
}
function Name() {
  return <div className="name">Name Page</div>;
}
function Contact() {
  return <div className="contact">Contact Page</div>;
}
function Birth() {
  return <div className="birth"> Birth Page</div>;
}
function Submit() {
  return <div className="submit">Submit Page</div>;
}
function Completed() {
  return <div className="completed-page">Thanks</div>;
}
function LogIn() {
  return <div className="log-in">LOG IN</div>;
}
// function Form() {
//   const [description, setDescription] = useState("");
//   const [quantity, setQuantity] = useState(5);
//   function handleSubmit(e) {
//     e.preventDefault();
//     if (!description) return;
//     const newItem = { description, quantity, packed: false, id: Date.now() };
//     setDescription("");
//     setQuantity(1);
//   }

// const navbar = [
//   {
//     name: "Home",
//     id: 1,
//     content: "Home page",
//   },
//   {
//     name: "Parameters",
//     id: 2,
//     content: "Parameter page",
//   },
//   {
//     name: "Command",
//     id: 3,
//     content: "Command page",
//   },
//   {
//     name: "Others",
//     id: 4,
//     content: "Other page",
//   },
// ];
// function ScoutX() {
//   const [selectedId, setSelectedId] = useState(null);
//   function handleNav(id) {
//     setSelectedId(id !== selectedId ? id : null);
//   }
//   return (
//     <div className="scout-container">
//       <div>
//         {navbar.map((nav) => (
//           <div
//             className={
//               nav.id === selectedId ? "scout-nav selected" : "scout-nav"
//             }
//             onClick={() => handleNav(nav.id)}
//             key={nav.id}
//           >
//             {nav.name}
//           </div>
//         ))}
//       </div>
//       <div className="content"></div>
//     </div>
//   );
// }
