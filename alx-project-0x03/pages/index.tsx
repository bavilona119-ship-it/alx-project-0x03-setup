// Interface pour les props du bouton
export interface ButtonProps {
  buttonLabel: string;
  buttonSize?: string;
  buttonBackgroundColor?: "red" | "blue" | "orange" | "green";
  action?: () => void;
}

// Interface pour le Layout
import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}

// Interface pour la navigation de page (index.tsx)
export interface PageRouteProps {
  pageRoute: string;
}
