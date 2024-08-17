import React from "react";
import { type ButtonProps } from "./types";
import { StyledButton } from "./styled";

const Button: React.FC<ButtonProps> = ({ label, onClick, type = "button", disabled = false, variant = "primary" }) => {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      disabled={disabled}
      variant={variant}
      data-testid="button"
    >
      {label}
    </StyledButton>
  );
};

export default Button;
