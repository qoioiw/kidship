import { AutoComplete, DataSourceType } from "./autoComplete";
import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Upload } from "./upload";
import { Icon } from "../Icon/icon";
import { Button } from "../Button/button";
const meta = {
  title: "Upload",
  component: Upload,
  tags: ["autodocs"],
};

export default meta;

const defaultFileList: UploadFile[] = [
  {
    uid: "123",
    size: 1234,
    name: "hello.md",
    status: "uploading",
    percent: 30,
  },
  { uid: "122", size: 1234, name: "xyz.md", status: "success", percent: 30 },
  { uid: "121", size: 1234, name: "eyiha.md", status: "error", percent: 30 },
];
const checkFileSize = (file: File) => {
  if (Math.round(file.size / 1024) > 50) {
    alert("file too big");
    return false;
  }
  return true;
};

const filePromise = (file: File) => {
  const newFile = new File([file], "new_name.docx", { type: file.type });
  return Promise.resolve(newFile);
};

// https://jsonplaceholder.typicode.com/posts  这个接口支持几kb的文件上传
// https://www.mocky.io/v2/5cc8019d300000980a055e76 这个接口支持大一点的  不过有点问题这个接口

export const SimpleComplete = () => (
  <Upload
    onChange={action("changed")}
    defaultFileList={defaultFileList}
    onRemove={action("removed")}
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
  >
    <Button size="lg" btnType="primary">
      <Icon icon="upload" /> 点击上传{" "}
    </Button>
  </Upload>
);
SimpleComplete.storyName = "普通的Upload组件";

export const CheckSizeComplete=()=>{
  const checkFileSize = (file: File) => {
    if (Math.round(file.size / 1024) > 50) {
      alert('file too big')
      return false;
    }
    return true;
  }
  return (
    <Upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      beforeUpload={checkFileSize}
    >
      <Button size="lg" btnType="primary"><Icon icon="upload" /> 不能传大于50Kb！ </Button>
    </Upload>  
  )
}
CheckSizeComplete.storyName = "上传前检查文件大小";

export const DropComplete = () => (
  <Upload
    action="https://jsonplaceholder.typicode.com/posts"
    onChange={action("changed")}
    defaultFileList={defaultFileList}
    onRemove={action("removed")}
    name="fileName"
    data={{ key: "value" }}
    headers={{ "X-Powered-BY": "vikingship" }}
    accept=".jpg"
    multiple
    drag
  >
    {" "}
    <Icon icon="upload" size="5x" theme="secondary" />
    <br />
    <p>Drag file over to upload</p>
  </Upload>
);
DropComplete.storyName = "拖动上传";
