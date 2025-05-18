import { PropsWithChildren } from "react";

export type ButtonSize = "small" | "medium" | "large";

export type ButtonVariant = "solid" | "outlined";

export type ButtonElementProps = Modify<
  React.HTMLProps<HTMLButtonElement>,
  {
    type?: "button" | "submit" | "reset" | undefined;
    loading?: boolean;
    size?: ButtonSize;
    variant?: ButtonVariant;
    fullWidth?: boolean;
    className?: string;
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
  }
>;

export interface ButtonProps extends ButtonElementProps, PropsWithChildren {}
