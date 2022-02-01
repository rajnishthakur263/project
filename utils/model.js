import { createContext, useState } from "react";

export const ModelContext = createContext(null);

export const ModelContextWrapper = ({ children }) => {
  const [Closestate, setCloseState] = useState(false);
  return (
    <ModelContext.Provider value={{ Closestate, setCloseState }}>
      {children}
    </ModelContext.Provider>
  );
};
