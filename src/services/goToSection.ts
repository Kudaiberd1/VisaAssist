import { useLocation, useNavigate } from "react-router-dom";

export const useGoToSection = () => {
  const location = useLocation();
  const nav = useNavigate();

  return (sectionId: string) => {
    if (location.pathname === "/") {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    nav("/");
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  };
};