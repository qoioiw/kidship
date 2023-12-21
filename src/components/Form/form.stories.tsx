import React, { useRef, useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { CustomRule } from "./useStore";
import  {Form, IFormRef } from './form'
import { FormItem } from "./formItem";
import { Input } from "../Input/Input";
import { Button } from "../Button/button";
import { ceil } from "lodash-es";
const meta = {
  title: "Form",
  component: Form,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "550px" }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      source: {
        type: "code",
      },
    },
  },
};
export default meta;

export const BasicForm = (args) => {
  const ref = useRef<IFormRef>()
  const confirmRules: CustomRule[] = [
    { type: "string", required: true, min: 3, max: 8 },
    ({ getFieldValue }) => ({
      asyncValidator(rule, value) {
        console.log("the value", getFieldValue("password"));
        console.log(value);
        if (value !== getFieldValue("password")) {
          return Promise.reject(
            "The two passwords that you entered do not match!"
          );
        }
        return Promise.resolve();
      },
    }),
  ];
  const resetAll = () => {
    console.log('form ref', ref.current)
    console.log('get value', ref.current?.getFieldValue('username'))
    ref.current?.resetFields()
    
  }
  return (
    <Form initialValues={{ username: 'viking', agreement: true }} {...args} ref={ref} >
      { ({ isValid, isSubmitting }) => (
      <>
      <FormItem label='用户名' name='username' rules={[{ type: 'email', required: true }]}>
        <Input/>
      </FormItem>
      <FormItem label='密码' name='password' rules={[{type: 'string', required: true, min: 3, max: 8 }]}>
        <Input type='password'/>
      </FormItem>
      <FormItem label='重复密码' name='confirmPwd' rules={confirmRules}>
        <Input type='password'/>
      </FormItem>
    
      <div className='agreement-section' style={{ 'display': 'flex', 'justifyContent': 'center'}}>
        {/* 这里的valuePropName不能用checked input 有关的命名 会冲突 */}
        <FormItem 
          name='agreement' 
          valuePropName='checked' 
          getValueFromEvent={(e) => e.target.checked}
          rules={[{ type: 'enum', enum: [true], message: '请同意协议'}]}
        >
          <input type="checkbox"  />
        </FormItem>
        <span className="agree-text">注册即代表你同意<a href='#'>用户协议</a></span>
      </div>
      <div className='viking-form-submit-area'>
        <Button type="submit" btnType='primary'>登陆 {isSubmitting ? '验证中' : '验证完毕'} {isValid ? '通过😄' : '没通过😢'} </Button>
        <Button type="button" onClick={resetAll}>重置</Button>
      </div>
      </>
    )}
    </Form>
  )
};
BasicForm.storyName = "基本的登陆表单";