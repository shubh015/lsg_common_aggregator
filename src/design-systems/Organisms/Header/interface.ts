import { StaticImageData } from "next/image";
import { PropsWithChildren } from "react";

export interface NavListProps {
    className?: string
    handleClose?: () => void
  }

export interface HeaderProps extends PropsWithChildren{
    className?: string 
  logoImage?: StaticImageData | string

}