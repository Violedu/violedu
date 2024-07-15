import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface NavBarContextProps {
  navBarHeight: number;
  onAboutClick: () => void;
  onLearningPathClick: () => void;
  onMentorClick: () => void;
  onRequestLessonClick: () => void;
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

  useEffect(() => {
    const navBar = document.querySelector("[data-scroll-to='navBar']");
    if (navBar) {
      setNavBarHeight(navBar.clientHeight);
    }
  }, []);

  const scrollToSection = (selector: string) => {
    const anchor = document.querySelector(selector);
    if (anchor) {
      const offsetPosition = anchor.getBoundingClientRect().top + window.scrollY - navBarHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const onAboutClick = () => scrollToSection("[data-scroll-to='introAboutContainer']");
  const onLearningPathClick = () => scrollToSection("[data-scroll-to='introLearningPath']");
  const onMentorClick = () => scrollToSection("[data-scroll-to='introMentorContainer']");
  const onRequestLessonClick = () => scrollToSection("[data-scroll-to='offersContainer']");

  return (
    <NavBarContext.Provider value={{ navBarHeight, onAboutClick, onLearningPathClick, onMentorClick, onRequestLessonClick }}>
      {children}
    </NavBarContext.Provider>
  );
};
