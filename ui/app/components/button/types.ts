export interface ButtonProps {
    text?: string;
    type?: "submit" | "reset" | "button" | undefined;
    children?: any;
    onClick?: (e: any) => void;
}

export interface ButtonState {}