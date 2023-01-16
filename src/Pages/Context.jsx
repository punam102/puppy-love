import { createContext, useState } from "react";

export const AppContext = createContext();

function AppContextProvider({ child }) {
   
    const [newdata, setNewdata] = useState("");
    
  
    return (
      <AppContext.Provider value={{setNewdata  ,newdata}}>
        {child}
      </AppContext.Provider>
    );
  }
  
  export default AppContextProvider;