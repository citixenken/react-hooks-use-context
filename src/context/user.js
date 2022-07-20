import React, { useState } from "react";

//creating context
const UserContext = React.createContext();

//provider component gives access of context data to child components
function UserProvider({ children }) {
  //VALUE prop of the provider is our context data
  //this VALUE will be available to child components of provider
  //   const currentUser = {
  //     name: "Ken M",
  //     interests: ["YouTubing", "Paragliding", "Zoning out", "Sleeping"],
  //   };
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
