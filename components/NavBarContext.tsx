import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useRouter } from 'next/router'; // Import useRouter from next/router

interface NavBarContextProps {
  navBarHeight: number;
  onLogoImageClick: () => void;
  onAboutClick: () => void;
  onRequestLessonClick: () => void;
  onFreeResourcesClick: () => void; // Add the new function to the context interface
}

const NavBarContext = createContext<NavBarContextProps | undefined>(undefined);

export const useNavBar = () => {
  const context = useContext(NavBarContext);
  if (!context) {
    throw new Error("useNavBar must be used within a NavBarProvider");
  }
  return context;
};

export const NavBarProvider = ({ children }: { children: ReactNode }) => {
  const [navBarHeight, setNavBarHeight] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const navBar = document.querySelector("[data-scroll-to='navBar']");
    if (navBar) {
      setNavBarHeight(navBar.clientHeight);
    }
  }, []);

  const onLogoImageClick = () => {
    router.push('/');
  };

  const onFreeResourcesClick = () => {
    router.push('/free-resources');
  };

  const onAboutClick = () => {
    router.push('/about');
  };

  const onRequestLessonClick = () => {
    router.push('/request');
  };

  return (
    <NavBarContext.Provider value={{ navBarHeight, onLogoImageClick, onAboutClick, onRequestLessonClick, onFreeResourcesClick }}>
      {children}
    </NavBarContext.Provider>
  );
};
