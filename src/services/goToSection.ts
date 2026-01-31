import { useLocation, useNavigate } from "react-router-dom";

export const useGoToSection = () => {
  const location = useLocation();
  const nav = useNavigate();

  return (sectionId: string, root: string) => {
    if (location.pathname === root) {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    nav(root);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  };
};