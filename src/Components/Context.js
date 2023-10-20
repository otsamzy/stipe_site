import React, { useContext, useState } from "react";
import sublinks from "./Data";
const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidbarOoen, setIsSideBarOpen] = useState(false);

  const [location, setlocation] = useState({});
  const [page, setpage] = useState({ page: "", links: [] });

  const openMenuFun = (text, cordinate) => {
    const page = sublinks.find((link) => link.page === text);
    setpage(page);

    setlocation(cordinate);
    setIsMenuOpen(true);
  };
  const closeMenuFun = () => {
    setIsMenuOpen(false);
  };

  const openSideBar = () => {
    setIsSideBarOpen(true);
  };
  const closeSideBar = () => {
    setIsSideBarOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isMenuOpen,
        isSidbarOoen,
        openMenuFun,
        closeMenuFun,
        openSideBar,
        closeSideBar,
        location,
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobal = () => {
  return useContext(AppContext);
};
