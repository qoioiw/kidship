import type { Meta, StoryObj } from "@storybook/react";

import {Icon} from "./icon";
import {Button} from "../Button/button";

const meta = {
  title: "Icon",
  component: Icon,
  tags: ["autodocs"],
} satisfies Meta<typeof Icon>;
export default meta;

type Story = StoryObj<typeof meta>;

export const ADefaultIcons: Story = {
  args: {
    /**设置 icon 图标*/
    icon: "check",
    size: "3x",
  },
};
ADefaultIcons.storyName = "默认图标";

export const BThemeIcons: Story = {
  args: {
    icon: "check",
    theme: "danger",
    size: "3x",
  },
};
BThemeIcons.storyName = "不同主题的 Icon";


export const IconExample = () => (
  <div style={{display:'flex',justifyContent:'space-around'}}>
    <Icon icon="check" size="3x" />
    <Icon icon="times" size="3x" />
    <Icon icon="anchor" size="3x" />
    <Icon icon="trash" size="3x" />
    <Button size="lg" btnType="primary">
      <Icon icon="check" /> check{" "}
    </Button>

    <Icon icon="check" size="3x" theme="theme" />
    <Icon icon="times" size="3x" theme="danger" />
    <Icon icon="anchor" size="3x" theme="primary" />
    <Icon icon="exclamation-circle" size="3x" theme="warning" />

    <Icon icon="spinner" size="3x" theme="primary" spin />
    <Icon icon="spinner" size="3x" theme="success" pulse />
  </div>
);

IconExample.storyName = "示例Icon";
