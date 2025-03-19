import useGlobalStore from "@/store/my-store";
import { getRandomID } from "@/utils/number";
import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Drawer,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Space,
} from "antd";
import { CheckboxGroupProps } from "antd/es/checkbox/Group.js";
import FormItem from "antd/es/form/FormItem/index.js";

function AddOrders({ onClose, open, showDrawer, item }: any) {
  const state = useGlobalStore();
  return (
    <>
      <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
        Buyurtma qo'shish
      </Button>
      <Drawer
        title="Yangi student qo'shish"
        width={500}
        onClose={onClose}
        open={open}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
        extra={<Space>{/* <Button onClick={onClose}>X</Button> */}</Space>}
        destroyOnClose
      >
        <Form
          onFinish={(values) => {
            const new_students = state.orders.concat({
              ...values,
              id: getRandomID(),
            });
            useGlobalStore.setState({ orders: new_students });
            localStorage.setItem("orders", JSON.stringify(new_students));
            onClose(false);
          }}
        >
          <FormItem
            label="Nomi"
            name="name"
            rules={[{ required: true, message: "Nomi kiritilmadi!!!" }]}
          >
            <Input />
          </FormItem>
          <FormItem
            label="Manzil"
            name="address"
            rules={[{ required: true, message: "Manzil kiritilmadi!!!" }]}
          >
            <Input />
          </FormItem>
          <FormItem
            label="Nechta"
            name="count"
            rules={[{ required: true, message: "Nechaligi kiritilmadi!!!" }]}
          >
            <InputNumber />
          </FormItem>
          <FormItem
            label="Mijoz"
            name="studentID"
            rules={[{ required: true, message: "Mijozni tanlang!" }]}
          >
            <Select
              options={state.students.map((g) => {
                return {
                  label: g.firstName,
                  value: g.id,
                };
              })}
            />
          </FormItem>{" "}
          <FormItem
            label="Mahsulot"
            name="productID"
            rules={[{ required: true, message: "Mahsulotni tanlang!" }]}
          >
            <Select
              options={state.products.map((g) => {
                return {
                  label: g.name,
                  value: g.id,
                };
              })}
            />
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </FormItem>
        </Form>
      </Drawer>
    </>
  );
}

export default AddOrders;
