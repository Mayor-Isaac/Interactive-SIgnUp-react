import React from "react";

export default function Name({
  setFirstName,
  setLastName,
  firstName,
  lastName,
}) {
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
