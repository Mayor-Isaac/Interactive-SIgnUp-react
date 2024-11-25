import React from "react";

export default function Completed({ firstName }) {
  return (
    <div className="completed-page">
      <h1>
        Thanks
        <span className="bokor-regular">
          <i>
            {" "}
            {firstName.charAt(0).toUpperCase() +
              firstName.slice(1).toLowerCase()}
          </i>
          ,
        </span>
      </h1>
      <p>Welcome to Smart Lab.</p>
      <p>
        <i class="fa-solid fa-handshake completed"></i>
      </p>
    </div>
  );
}
