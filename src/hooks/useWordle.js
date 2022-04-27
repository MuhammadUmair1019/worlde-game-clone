import { useContext } from "react";
import { WordleContext } from "../helper/WordleContext";

export default function useWordle() {
  const context = useContext(WordleContext);

  if (!context) {
    throw Error("useWordle() cannot be access outside the scope");
  }

  return context;
}
