import { ReactNode } from "react";

export type buttonProps = {
  text: string | ReactNode;
  reverseColors?: boolean;
  onClick: () => void;
  isSubmit?: boolean;
};