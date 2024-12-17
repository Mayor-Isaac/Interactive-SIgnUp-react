import React, { useContext } from "react";
import { DetailsContext } from "../DetailsContext";

export default function Name() {
  const { setFirstName, setLastName, firstName, lastName } =
    useContext(DetailsContext);

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
        <div key={i}>
          <form>
            <p>{pos} Name</p>
            <input
              type="text"
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
