/// <reference types="react" />
import React$1 from 'react';

interface PageProps {
    title: string;
    children: React.ReactNode;
}

declare const Page: React$1.FC<PageProps>;

interface ButtonProps {
    label: string;
    onClick: () => void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    variant?: "primary" | "secondary";
}

declare const Button: React$1.FC<ButtonProps>;

export { Button, Page };
