import { useContext } from "react";
import { DetailsContext } from "../DetailsContext";

export default function Birth() {
  const { date, setDate, setGender } = useContext(DetailsContext);
  function handleDate(e) {
    setDate(e.target.value);
  }
  function handleGender(e) {
    setGender(e.target.value);
  }
  return (
    <div className="birth">
      <h1>Date of Birth:</h1>
      <form>
        <div>
          <p>Date</p>
          <input type="date" name="" value={date} onChange={handleDate} />
        </div>
        <div>
          <p>Gender</p>
          <select onChange={handleGender}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
      </form>
    </div>
  );
}
