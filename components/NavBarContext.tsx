import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useRouter } from 'next/router';

interface NavBarContextProps {
  navBarHeight: number;
  onLogoImageClick: () => void;
  onAboutClick: () => void;
  onRequestLessonClick: () => void;
  onFreeResourcesClick: () => void;
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

  const scrollToSection = (selector: string) => {
    const anchor = document.querySelector(selector);
    if (anchor) {
      const offsetPosition =
        anchor.getBoundingClientRect().top + window.scrollY - navBarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

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
    const handleScroll = () => scrollToSection("[data-scroll-to='offersContainer']");

    if (router.pathname === '/') {
      // Already on the home page, just scroll
      handleScroll();
    } else {
      // Navigate to the home page and scroll after navigation
      const handleRouteChange = () => {
        setTimeout(handleScroll, 100); // Adjust delay as needed
        router.events.off('routeChangeComplete', handleRouteChange); // Cleanup listener
      };

      router.events.on('routeChangeComplete', handleRouteChange);
      router.push('/');
    }
  };

  return (
    <NavBarContext.Provider
      value={{
        navBarHeight,
        onLogoImageClick,
        onAboutClick,
        onRequestLessonClick,
        onFreeResourcesClick,
      }}
    >
      {children}
    </NavBarContext.Provider>
  );
};
