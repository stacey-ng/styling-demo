import StyledButton from "./StyledButton";

export default {
  component: StyledButton,
  title: "StyledButton",
  argTypes: {
    children: {
      table: { disable: true },
    },
    startIcon: {
      table: { disable: true },
    },
    endIcon: {
      table: { disable: true },
    },
    variant: {
      control: {
        type: "select",
        options: ["contained", "outlined", "minimal"],
      },
    },
    color: {
      control: {
        type: "select",
        options: ["blue", "neutral", "red", "orange", "yellow", "green"],
      },
    },
    size: {
      control: {
        type: "radio",
        options: ["small", "medium", "large"],
      },
    },
    activatable: {
      control: {
        type: "boolean",
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
  },
};

const Template = (args) => <StyledButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Button",
  variant: "contained",
  color: "blue",
  activatable: true,
  size: "medium",
  startIcon: "AiFillFilter",
};

export const Outlined = Template.bind({});
Outlined.args = {
  children: "Outlined Button",
  variant: "outlined",
  color: "neutral",
  activatable: true,
  size: "medium",
  startIcon: "AiFillFilter",
};
