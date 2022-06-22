import React from "react";
const Context = React.createContext();

export function ContextProvider(props) {
  const [theme, setTheme] = React.useState(true);
  function toggleTheme() {
    setTheme(!theme);
  }

  return (
    <Context.Provider value={{ theme, setTheme, toggleTheme }}>
      {props.children}
    </Context.Provider>
  );
}
export default Context;
