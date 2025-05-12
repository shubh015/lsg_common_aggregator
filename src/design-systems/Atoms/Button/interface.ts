import { PropsWithChildren } from "react"

export type ButtonSize = 'small' | 'medium' | 'large'

export type ButtonVariant = 'solid' | 'outlined'

export type ButtonElementProps = Modify<React.HTMLProps<HTMLButtonElement>,
{
    type?: 'button' | 'submit' | 'reset' | undefined
    loading?: boolean
    size?: ButtonSize
    variant?: ButtonVariant
    fullWidth?: boolean
    className?: string
}
>

export interface ButtonProps extends ButtonElementProps,
PropsWithChildren{}