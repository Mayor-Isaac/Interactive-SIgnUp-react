import { useDetails } from "../DetailsContext";

export default function Header() {
  const { stage, tabs } = useDetails();
  return (
    <h2 className="center bokor-regular completed">
      {stage < tabs.length ? "Signup Form" : "Congratulations"}
    </h2>
  );
}
