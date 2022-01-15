import React, { createContext } from "react";

import useCalc from "../hooks/useCalc"

const Context = React.createContext();

function CalcProvider({ children }) {
  const { calculo,list } = useCalc();

  return (
    <Context.Provider
      value={{ calculo,list }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, CalcProvider };