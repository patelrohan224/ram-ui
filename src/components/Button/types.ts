export interface ButtonProps {
  label: string
  onClick: () => void
  type?: "button" | "submit" | "reset"
  disabled?: boolean
  variant?: "primary" | "secondary"
}
