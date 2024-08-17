import Button from ".";

export default {
  title: "MyComponents/Button",
  component: Button,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      description: "The label of the Button",
      control: {
        type: "text"
      }
    },
    onClick: {
      description: "The click event handler",
      action: "clicked"
    },
    type: {
      description: "The type of the Button",
      control: {
        type: "select",
        options: ["button", "submit", "reset"]
      }
    },
    disabled: {
      description: "Disables the Button if true",
      control: {
        type: "boolean"
      }
    },
    variant: {
      description: "The style variant of the Button",
      control: {
        type: "select",
        options: ["primary", "secondary"]
      }
    }
  }
};

export const PrimaryButton = {
  args: {
    label: "Primary Button",
    onClick: () => { alert("Primary Button Clicked!"); },
    type: "button",
    disabled: false,
    variant: "primary"
  }
};

export const SecondaryButton = {
  args: {
    label: "Secondary Button",
    onClick: () => { alert("Secondary Button Clicked!"); },
    type: "button",
    disabled: false,
    variant: "secondary"
  }
};

export const DisabledButton = {
  args: {
    label: "Disabled Button",
    onClick: () => { alert("Disabled Button Clicked!"); },
    type: "button",
    disabled: true,
    variant: "primary"
  }
};
