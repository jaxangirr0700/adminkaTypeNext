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

function AddProduct({ onClose, open, showDrawer }: any) {
  const optionsActive: CheckboxGroupProps<boolean>["options"] = [
    { label: "Active", value: true },
    { label: "inactive", value: false },
  ];
  const state = useGlobalStore();
  return (
    <>
      <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
        Mahsulot qo'shish
      </Button>
      <Drawer
        title="Yangi Mahsulot qo'shish"
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
            const new_students = state.products.concat({
              ...values,
              id: getRandomID(),
            });
            useGlobalStore.setState({ products: new_students });
            localStorage.setItem("products", JSON.stringify(new_students));
            onClose(false);
          }}
        >
          <FormItem
            label="Mahsulot nomi"
            name="name"
            rules={[{ required: true, message: "Ism kiritilmadi!!!" }]}
          >
            <Input />
          </FormItem>
          <FormItem
            label="Mahsulot narxi"
            name="price"
            rules={[
              { required: true, message: "Mahsulot narxini kiritilmadi!!!" },
            ]}
          >
            <InputNumber />
          </FormItem>
          <FormItem
            label="Kategoriyasining nomi"
            name="categorieId"
            rules={[{ required: true, message: "Kategoriyani tanlang!" }]}
          >
            <Select
              options={state.categories.map((g) => {
                return {
                  label: g.name,
                  value: g.id,
                };
              })}
            />
          </FormItem>
          <FormItem label="Active" name="active">
            <Radio.Group
              block
              options={optionsActive}
              defaultValue="Active"
              optionType="button"
              buttonStyle="solid"
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

export default AddProduct;
