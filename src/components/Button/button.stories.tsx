import type { Meta, StoryObj } from "@storybook/react";

import { Button,ButtonProps } from "./button";

const meta = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultButton: Story = {
  args: {
    btnType: "default",
    children: "Button",
    onClick: function onRefCheck() {},
  },
};
DefaultButton.storyName = "默认 Button";


export const ButtonWithSize: Story = {
  args: {
    btnType: "primary",
    size: "lg",
    children: "Button",
  },
};
ButtonWithSize.storyName = "不同大小的 Button";

export const ButtonWithType: Story = {
  args: {
    btnType: "primary",
    children: "Button",
  },
};
ButtonWithType.storyName = "不同主题的 Button";

export const ButtonExample = () => (
  <div style={{display:'flex',justifyContent:'space-around'}}>
    <Button onClick={function onRefCheck() {}}> default button </Button>

  
    <Button btnType="primary"> primary button </Button>
    <Button btnType="danger"> danger button </Button>
    <Button btnType="link" href="https://google.com">
      {" "}
      link button{" "}
    </Button>
    <Button size="sm"> small button </Button>

    <Button size="lg"> large button </Button>
  </div>
);
ButtonExample.storyName = "示例";
