import { useDetails } from "../DetailsContext";

export default function Progress() {
  const { stage, tabs } = useDetails();

  return stage < tabs.length ? (
    <>
      <div className="flex">
        {tabs.map((tab, i) => (
          <h4 className={stage >= i + 1 ? "tab completed" : "tab"}>{tab}</h4>
        ))}
      </div>
      <div className="flex tab-btns">
        {tabs.map((_, i) => (
          <div
            className={stage >= i + 1 ? "tab-btn tab-btn-completed" : "tab-btn"}
          >
            {i + 1}
          </div>
        ))}
      </div>
    </>
  ) : null;
}
