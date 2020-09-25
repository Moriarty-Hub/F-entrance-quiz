import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';

// TODO 这里如果是想使用模版字符串的话请使用`
// TODO eslint error
const validateMessages = {
  // eslint-disable-next-line
  required: '${label} is required!',
  types: {
    // eslint-disable-next-line
    email: '${label} is not validate email!',
    // eslint-disable-next-line
    number: '${label} is not a validate number!',
  },
  number: {
    // eslint-disable-next-line
    range: '${label} must be between ${min} and ${max}',
  },
};

class CreateTraineePage extends Component {
  onFinish = (values) => {
    console.log(values);
  };

  render() {
    return (
      // TODO 这里多使用一些语义化标签例如section，header
      <div>
        <Form name="nest-messages" onFinish={this.onFinish} validateMessages={validateMessages}>
          <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
            <Input />
          </Form.Item>
          <Form.Item name={['user', 'website']} label="Website">
            <Input />
          </Form.Item>
          <Form.Item name={['user', 'introduction']} label="Introduction">
            <Input.TextArea />
          </Form.Item>
          <Form.Item>
            {/* TODO 没有取消按钮 */}
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default CreateTraineePage;
