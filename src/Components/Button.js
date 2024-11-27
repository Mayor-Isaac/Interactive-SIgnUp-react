import React from "react";

export default function Button({ classGiven, handleFunc, children }) {
  return (
    <div className={classGiven} onClick={handleFunc}>
      {children}
    </div>
  );
}
