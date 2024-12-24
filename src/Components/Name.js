import { useDetails } from "../DetailsContext";

export default function Name() {
  const { firstName, lastName, dispatch } = useDetails();

  const details = ["First", "Last"];

  function handleBasicInfo(e) {
    e.preventDefault();
    // console.log(e);
    e.target.name === "firstName"
      ? dispatch({ type: "setFirstName", payload: e.target.value })
      : dispatch({ type: "setLastName", payload: e.target.value });
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
