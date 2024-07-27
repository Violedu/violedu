import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useRouter } from 'next/router'; // Import useRouter from next/router

interface NavBarContextProps {
  navBarHeight: number;
  onAboutClick: () => void;
  onLearningPathClick: () => void;
  onMentorClick: () => void;
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
  const router = useRouter(); // Initialize the router

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
  
  const onFreeResourcesClick = () => { // Define the new function
    router.push('/free-resources');
  };

  return (
    <NavBarContext.Provider value={{ navBarHeight, onAboutClick, onLearningPathClick, onMentorClick, onRequestLessonClick, onFreeResourcesClick }}>
      {children}
    </NavBarContext.Provider>
  );
};
