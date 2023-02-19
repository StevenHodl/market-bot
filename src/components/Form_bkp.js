import { Button, Input, InputNumber, Select, Switch, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Form as AntForm } from "antd";
import "./Form.css";
import React, { Component } from "react";
import axios from "axios";

const { TextArea } = Input;

const validateMessages = {
  required: "${label} is required!",
};

const onFinish = (formInputData) => {
  let post_id;
  console.log("sending POST request to backend");
  axios
    .post(localStorage.getItem("backend_url") + "/api/post/", {
      category: formInputData.category,
      title: formInputData.title,
      amount: Number(formInputData.amount),
      description: formInputData.description,
      discount: formInputData.discount,
      restrict: formInputData.restrict,
      price: Number(formInputData.price),
      currency: formInputData.curr,
      user_id: "16",
    })
    .then((response) => {
      post_id = response.data.id;
      formInputData.files.fileList.map((file) => {
        console.log(file.originFileObj);
        const formData = new FormData();
        formData.append("orig_name", file.name);
        formData.append("post_id", post_id);
        formData.append("image_file", file.originFileObj);
        console.log(formData);
        axios.post(
          localStorage.getItem("backend_url") + "/api/post/image/",
          formData
        );
      });
    })
    .catch((error) => console.log(error));
};

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "Market",
      title: "",
      amount: "",
      description: "",
      discount: false,
      restrict: false,
      price: 0.0,
      curr: "",
      files: [],
    };
  }

  render() {
    return (
      <div className="form_container">
        <AntForm
          name="NewPosting"
          onFinish={(event) => {
            onFinish(this.state);
          }}
          onFinishFailed={(event) => {
            console.log("failed");
          }}
          scrollToFirstError
          labelCol={{
            span: 10,
          }}
          wrapperCol={{
            span: 29,
          }}
          layout="horizontal"
          initialValues={{
            size: "default",
          }}
          validateMessages={validateMessages}
        >
          <AntForm.Item label="Select">
            <Select
              value={this.state.category}
              onChange={(e) => this.setState({ category: e })}
            >
              <Select.Option value="Market">Market</Select.Option>
              <Select.Option value="Service">Service</Select.Option>
              <Select.Option value="Exchange">Exchange</Select.Option>
            </Select>
          </AntForm.Item>
          <AntForm.Item
            label="Title"
            name="title"
            required
            type="string"
            rules={[
              {
                required: true,
                min: 10,
              },
            ]}
          >
            <Input
              value={this.state.title}
              onChange={(e) => this.setState({ title: e.target.value })}
            />
          </AntForm.Item>
          <AntForm.Item label="Available amount">
            <InputNumber />
          </AntForm.Item>
          <AntForm.Item label="TextArea">
            <TextArea
              rows={7}
              value={this.state.description}
              onChange={(e) => this.setState({ description: e.target.value })}
            />
          </AntForm.Item>
          <AntForm.Item
            label="AnCap Discount"
            tooltip="Enable a -22% discount for AnCap users."
            valuePropName="checked"
          >
            <Switch
              checked={this.state.discount}
              onChange={(e) => this.setState({ discount: e })}
            />
          </AntForm.Item>
          <AntForm.Item
            label="Restricted mode"
            tooltip="Only OG members will see this post"
            valuePropName="checked"
          >
            <Switch
              checked={this.state.restrict}
              onChange={(e) => this.setState({ restrict: e })}
            />
          </AntForm.Item>

          <AntForm.Item label="Upload Photos" valuePropName="fileList">
            <Upload
              multiple
              listType="picture-card"
              beforeUpload={() => {
                return false;
              }}
              onChange={(fileList) => {
                this.setState({ files: fileList });
              }}
            >
              <div>
                <PlusOutlined />
                <div
                  style={{
                    marginTop: 8,
                  }}
                >
                  Upload
                </div>
              </div>
            </Upload>
          </AntForm.Item>
          <AntForm.Item name="price" label="Price">
            <Input
              type="text"
              style={{
                width: 100,
              }}
              onChange={(e) => this.setState({ price: e.target.value })}
            />
            <span>
              <Select
                style={{
                  width: 80,
                  margin: "0 8px",
                }}
                onChange={(e) => this.setState({ curr: e.target.value })}
              >
                <Select.Option value="Sats">Sats</Select.Option>
                <Select.Option value="BTC">BTC</Select.Option>
                <Select.Option value="Dollar">Euro</Select.Option>
              </Select>
            </span>
          </AntForm.Item>
          <AntForm.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </AntForm.Item>
          <AntForm.Item>
            <Button>Reset</Button>
          </AntForm.Item>
        </AntForm>
      </div>
    );
  }
}

export default Form;
