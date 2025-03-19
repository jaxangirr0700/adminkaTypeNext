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

function AddStudent({ onClose, open, showDrawer, item }: any) {
  const options: CheckboxGroupProps<string>["options"] = [
    { label: "Erkak", value: "male" },
    { label: "Ayol", value: "female" },
  ];
  const optionsActive: CheckboxGroupProps<boolean>["options"] = [
    { label: "Active", value: true },
    { label: "inactive", value: false },
  ];
  const state = useGlobalStore();
  return (
    <>
      <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
        Student qo'shish
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
            const new_students = state.students.concat({
              ...values,
              id: getRandomID(),
            });
            useGlobalStore.setState({ students: new_students });
            localStorage.setItem("students", JSON.stringify(new_students));
            onClose(false);
          }}
        >
          <FormItem
            label="Ism"
            name="firstName"
            rules={[{ required: true, message: "Ism kiritilmadi!!!" }]}
          >
            <Input />
          </FormItem>
          <FormItem
            label="Familiya"
            name="lastName"
            rules={[{ required: true, message: "Familiya kiritilmadi!!!" }]}
          >
            <Input />
          </FormItem>
          <FormItem
            label="Yosh"
            name="age"
            rules={[{ required: true, message: "Yoshingiz kiritilmadi!!!" }]}
          >
            <InputNumber />
          </FormItem>{" "}
          <FormItem
            label="Guruh"
            name="group_id"
            rules={[{ required: true, message: "Guruhni tanlang!" }]}
          >
            <Select
              options={state.groups.map((g) => {
                return {
                  label: g.name,
                  value: g.id,
                };
              })}
            />
          </FormItem>
          <FormItem label="Jinsi" name="gender">
            <Radio.Group
              block
              options={options}
              defaultValue="Erkak"
              optionType="button"
              buttonStyle="solid"
            />
          </FormItem>{" "}
          <FormItem label="Active" name="active">
            <Radio.Group
              block
              options={optionsActive}
              defaultValue="Erkak"
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

export default AddStudent;
