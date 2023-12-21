import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Input } from "./Input";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Input",
  component: Input,
  tags: ["autodocs"],
  // argTypes: {
  //   style: { width: '300px' }
  // },
  // decorators: [
  //   (Story) => (
  //     <div style={{ width: "300px" }}>
  //       <Story />
  //     </div>
  //   ),
  // ],
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DefaultInput: Story = {
  args: {
    style: { width: "300px" },
    size: "lg",
    placeholder: "placeholder",
    onChange: () => {
      action("changed");
    },
  },
};
DefaultInput.storyName = "默认Input";

export const IconInput: Story = {
  args: {
    style: { width: "300px" },
    placeholder: "input with icon",
    icon: "search",
  },
};
IconInput.storyName = "带图标的Input";

export const SizeInput: Story = {
  args: {
    style: { width: "300px" },
    placeholder: "small size",
    size: "sm",
  },
};
IconInput.storyName = "大小不同的Input";

export const PandInput: Story = {
  args: {
    style: { width: "300px" },
    defaultValue: "prepend text",
    prepend: "https://",
  },
};
PandInput.storyName = "带前后缀的Input";

export const InputExample = () => (
  <div style={{ display: "flex", justifyContent: "space-around" , flexWrap: 'wrap'}}>
    <Input
      style={{ width: "300px", marginBottom: "5px" }}
      placeholder="placeholder"
      onChange={action("changed")}
    />
    <Input
      style={{ width: "300px", marginBottom: "5px" }}
      placeholder="disabled input"
      disabled
    />
    <Input
      style={{ width: "300px", marginBottom: "5px" }}
      placeholder="input with icon"
      icon="search"
    />
    <Input
      style={{ width: "300px", marginBottom: "5px" }}
      defaultValue="large size"
      size="lg"
    />
    <Input
      style={{ width: "300px", marginBottom: "5px" }}
      placeholder="small size"
      size="sm"
    />
    <Input
      style={{ width: "300px", marginBottom: "5px" }}
      defaultValue="prepend text"
      prepend="https://"
    />
    <Input
      style={{ width: "300px", marginBottom: "5px" }}
      defaultValue="google"
      append=".com"
    />
  </div>
);
InputExample.storyName = "示例Input";