import { useDetails } from "../DetailsContext";

export default function Contact() {
  const { email, telephone, dispatch } = useDetails();

  const details = ["Email", "Telephone"];

  function handleContact(e) {
    e.preventDefault();
    e.target.name === "telephone"
      ? dispatch({ type: "setTelephone", payload: e.target.value })
      : dispatch({ type: "setEmail", payload: e.target.value });
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
