import React from "react";

export function Submit({
  lastName,
  firstName,
  email,
  telephone,
  date,
  gender,
}) {
  return (
    <div className="submit">
      <div>
        <p className="title completed">First Name : </p>
        <p className="descp">{firstName}</p>
      </div>
      <div>
        <p className="title completed">Last Name : </p>
        <p className="descp">{lastName}</p>
      </div>
      <div>
        <p className="title completed">Email : </p>
        <p className="descp">{email}</p>
      </div>
      <div>
        <p className="title completed">Phone Number : </p>
        <p className="descp">{telephone}</p>
      </div>
      <div>
        <p className="title completed">Data of Birth : </p>
        <p className="descp">{date}</p>
      </div>
      <div>
        <p className="title completed">Gender : </p>
        <p className="descp">{gender}</p>
      </div>
    </div>
  );
}
