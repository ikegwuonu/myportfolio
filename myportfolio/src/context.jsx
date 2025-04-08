import React, { createContext, useState } from 'react';

// Creating the context
export const AppContext = createContext();

export const Context = ({children}) => {
    const [menu, setMenu] = useState("home");
    const mobile = window.innerWidth <= 768 ? true : false;
    const [toggleSideBar, setToggleSideBar]=useState(false);

    return (
        <AppContext.Provider value={{ menu, setMenu ,mobile,toggleSideBar, setToggleSideBar}}>
            {children}
        </AppContext.Provider>
    );
}
