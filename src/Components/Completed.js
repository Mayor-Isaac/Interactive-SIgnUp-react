import React, { useContext } from "react";
import { DetailsContext } from "../DetailsContext";

export default function Completed() {
  const { firstName } = useContext(DetailsContext);

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
      <p>Welcome to Smart Tech Company.</p>
      <p>
        <i class="fa-solid fa-handshake completed"></i>
      </p>
    </div>
  );
}
