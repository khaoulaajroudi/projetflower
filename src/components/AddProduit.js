import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Form,
  Input,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from "antd";
import { Modal, Button } from "antd";
import { AddProduct } from "../JS/Actions";

function AddProduit() {
  const [newProduct, setnewProduct] = useState();
  const dispatch = useDispatch();
  const [discount, setdiscount] = useState(false);

  // show Modal
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  // end show modal

  return (
    <div className="addproduct">
      <div className="add boxshop">
        <img src="Florist-cuate.png" className="addphoto" />
        <Button type="primary" onClick={showModal} className="btn bout">
          <img src="picture.png" style={{ width: "40px", height: "40px" }} />{" "}
          Add Product
        </Button>
      </div>
      <Modal
        title="ADD-Product"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form>
          <Form.Item label="Name of Product">
            <Input
              onChange={(e) =>
                setnewProduct({ ...newProduct, Name: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item label="Image">
            <Input
              onChange={(e) =>
                setnewProduct({ ...newProduct, Image: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item label="Discount" onClick={(e) => setdiscount(!discount)}>
            <Switch />
          </Form.Item>
          {discount ? (
            <Form.Item label="Discount">
              <Input
                onChange={(e) =>
                  setnewProduct({ ...newProduct, discount: e.target.value })
                }
              />
            </Form.Item>
          ) : null}
          {/* <Form.Item label="Discount">
              <Select
                onChange={(e) =>
                  setnewProduct({ ...newProduct, discount: e.target.value })
                }
              >
                <Select.Option value="5">5</Select.Option>
                <Select.Option value="10">10</Select.Option>
                <Select.Option value="15">15</Select.Option>
              </Select>
            </Form.Item>
          ) : null} */}
          <Form.Item label="Price">
            <Input
              onChange={(e) =>
                setnewProduct({ ...newProduct, pricei: e.target.value })
              }
            />
          </Form.Item>
        </Form>
        <div class="ant-modal-footer">
          <button type="button" class="ant-btn">
            <span>Cancel</span>
          </button>
          <button
            type="button"
            class="ant-btn ant-btn-primary"
            onClick={() => dispatch(AddProduct(newProduct, { pricei: "" }))}
          >
            <span>OK</span>
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default AddProduit;
