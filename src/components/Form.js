import { Input, InputNumber, Select, Switch, Upload, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Form as AntForm } from "antd";
import "./Form.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect } from "react";
import { useRef } from 'react';
import axios from "axios";

import { useTg } from "../hooks/useTg";

const { TextArea } = Input;
let formDataPersist = {};

function Form() {

  const { tg } = useTg();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    category: "Market",
    title: "",
    amount: null,
    description: "",
    discount: false,
    restrict: false,
    price: null,
    curr: "",
    files: [],
    user_id: "",
  });


  const validateMessages = {
    required: "${label} is required!",
  };
  const delay = ms => new Promise(res => setTimeout(res, ms));

  const onFinish = async (formInputData) => {
    let post_id;
    console.log("sending POST request to backend");
    await axios
      .post(localStorage.getItem("backend_url") + "/api/post/", {
        category: formInputData.category,
        title: formInputData.title,
        amount: Number(formInputData.amount),
        description: formInputData.description,
        discount: formInputData.discount,
        restrict: formInputData.restrict,
        price: Number(formInputData.price),
        currency: formInputData.curr,
        user_id: formInputData.user_id,
      })
      .then((response) => {
        post_id = response.data.id;
        formInputData?.files?.fileList?.map((file) => {
          const formData = new FormData();
          formData.append("orig_name", file.name);
          formData.append("post_id", post_id);
          formData.append("image_file", file.originFileObj);
          axios.post(
            localStorage.getItem("backend_url") + "/api/post/image/",
            formData
          );
        });
      })
      .catch((error) => console.log(error));
    await delay(2000);
    await tg.MainButton.hideProgress()
    await tg.MainButton.hide().then(
      navigate("/"));
  };

  const handleChange = (propName, value) => {
    setFormData((formData) => {
      return {
        ...formData,
        [propName]: value,
      };
    });
  };

  const onBack = () => { navigate(-1) }

  const onSendData = useCallback(() => {
    tg.MainButton.showProgress(false);
    showProgressMsg()

    const user_id = tg?.initDataUnsafe?.user?.id;
    if (user_id !== undefined) {
      formDataPersist.user_id = user_id
      onFinish(formDataPersist);
    } else {
      console.error("user not identified")
    }
  }, []);

  const ref = useRef();
  function onSubmit() {
    ref.current.submit();
  }

  useEffect(() => {
    tg.BackButton.show();
    tg.onEvent("backButtonClicked", onBack);

    tg.MainButton.text = "Submit";
    tg.MainButton.show();
    tg.onEvent("mainButtonClicked", onSubmit);
    return () => {

      tg.offEvent("backButtonClicked", onBack);
      tg.offEvent("mainButtonClicked", onSubmit);
    };
  }, [onBack, onSubmit]);

  const [messageApi, contextHolder] = message.useMessage();
  const showProgressMsg = () => {
    messageApi
      .open({
        type: 'loading',
        content: 'Action in progress..',
        duration: 2,
      })
      .then(() => message.success('Loading finished', 2.5))
  };

  return (
    <div className="form_container">
      <AntForm ref={ref} tabIndex={0}
        name="NewPosting"
        onFinish={() => {
          formDataPersist = formData
          onSendData();
        }}
        scrollToFirstError
        onFinishFailed={(event) => {
          console.log("failed");
        }}
        labelCol={{
          span: 12
        }}
        wrapperCol={{
          span: 60,
        }}
        className="form"
        layout="horizontal"
        initialValues={{
          size: "default",
        }}
        validateMessages={validateMessages}
      >
        {contextHolder}
        <AntForm.Item label="Select">
          <Select value={formData.category} onChange={(value) => handleChange("category", value)}>
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
          <Input value={formData.title} onChange={(e) => handleChange("title", e.target.value)} />
        </AntForm.Item>
        <AntForm.Item label="Available amount">
          <InputNumber value={formData.amount} onChange={(e) => handleChange("amount", e)}
          />
        </AntForm.Item>
        <AntForm.Item label="TextArea">
          <TextArea
            rows={7}
            value={formData.description}
            onChange={(e) => handleChange("description", e.target.value)}
          />
        </AntForm.Item>
        <AntForm.Item
          label="AnCap Discount"
          tooltip="Enable a -22% discount for AnCap users."
          valuePropName="checked"
        >
          <Switch checked={formData.discount} onChange={(e) => handleChange("discount", e)} />
        </AntForm.Item>
        <AntForm.Item
          label="Restricted mode"
          tooltip="Only OG members will see this post"
          valuePropName="checked"
        >
          <Switch checked={formData.restrict} onChange={(e) => handleChange("restrict", e)} />
        </AntForm.Item>

        <AntForm.Item name="price" label="Price">
          <Input.Group compact>

            <Input value={formData.price} style={{ width: '40%' }} type="number" onChange={(e) => handleChange("price", e.target.value)} ></Input>
            <Select defaultValue="Euro" required value={formData.curr} style={{ minWidth: '40px' }} onChange={(e) => handleChange("curr", e)} >
              <Select.Option value="Sat" >Sats</Select.Option>
              <Select.Option value="Eur" >Euro</Select.Option>
            </Select>
          </Input.Group>
        </AntForm.Item>


        <AntForm.Item label="Upload Photos" valuePropName="fileList">
          <Upload
            multiple
            listType="picture-card"
            beforeUpload={() => {
              return false;
            }}
            onChange={(fileList) => {
              handleChange("files", fileList);
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


        {/*         <AntForm.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </AntForm.Item> */}
      </AntForm>
    </div >
  );
};

export default Form;
