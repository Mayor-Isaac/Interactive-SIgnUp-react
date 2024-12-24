import { createContext, useContext, useReducer } from "react";

const DetailsCreate = createContext();

const tabs = ["Name", "Contact", "Birth", "Submit"];

const initialState = {
  stage: 0,
  firstName: "",
  lastName: "",
  email: "",
  telephone: "",
  date: "",
  gender: "Male",
};

function reducer(state, action) {
  switch (action.type) {
    case "setStage":
      return { ...state, stage: action.payload };
    case "setFirstName":
      return { ...state, firstName: action.payload };
    case "setLastName":
      return { ...state, lastName: action.payload };
    case "setEmail":
      return { ...state, email: action.payload };
    case "setTelephone":
      return { ...state, telephone: action.payload };
    case "setDate":
      return { ...state, date: action.payload };
    case "setGender":
      return { ...state, gender: action.payload };
    case "nextPage":
      return { ...state, stage: state.stage + 1 };
    case "prevPage":
      return { ...state, stage: state.stage - 1 };
    case "reset":
      return initialState;

    default:
      alert("Wrong action");
  }
}

function DetailsContext({ children }) {
  const [
    { stage, firstName, lastName, email, telephone, date, gender },
    dispatch,
  ] = useReducer(reducer, initialState);

  // CTA
  function handlePrevPage() {
    if (stage === tabs.length) {
      dispatch({ type: "reset" });
    } else dispatch({ type: "prevPage" });
  }

  function handleNextPage() {
    if (stage === 0) {
      if (!lastName || !firstName) return;
    }
    if (stage === 1) {
      if (!email || !telephone) return;
    }
    if (stage === 2) {
      if (!date || !gender) return;
    }
    dispatch({ type: "nextPage" });
  }

  return (
    <DetailsCreate.Provider
      value={{
        firstName,
        lastName,
        email,
        telephone,
        date,
        stage,
        handleNextPage,
        handlePrevPage,
        tabs,
        gender,
        dispatch,
      }}
    >
      {children}
    </DetailsCreate.Provider>
  );
}
function useDetails() {
  const context = useContext(DetailsCreate);
  if (context === undefined) alert("Invalid Context position");
  return context;
}

export { DetailsContext, useDetails };
