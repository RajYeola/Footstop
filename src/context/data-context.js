import { createContext, useContext, useReducer } from "react";
import { dataReducer, initialState } from "../reducer/data-reducer";
import { data } from "../data";

const DataContext = createContext();

export default function DataProvider({ children }) {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  return (
    <DataContext.Provider value={{ state, dispatch, data }}>
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => {
  return useContext(DataContext);
};
