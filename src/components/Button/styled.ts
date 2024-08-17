import styled, { css } from "styled-components";

const primaryStyle = css`
  background-color: #007bff;
  color: white;

  &:hover:enabled {
    background-color: #0056b3;
  }
`;

const secondaryStyle = css`
  background-color: #6c757d;
  color: white;

  &:hover:enabled {
    background-color: #5a6268;
  }
`;

export const StyledButton = styled.button<{ variant: "primary" | "secondary" }>`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  ${({ variant }) => (variant === "primary" ? primaryStyle : secondaryStyle)}

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;
