import { createContext } from "react";

interface CounterContextType {
  count: number;
}

interface CounterActionContextType {
  plus: () => void;
  minus: () => void;
  reset: () => void;
}

export const CounterContext = createContext<CounterContextType | null>(null);
export const CounterActionContext =
  createContext<CounterActionContextType | null>(null);
