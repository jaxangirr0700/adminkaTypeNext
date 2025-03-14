import useGlobalStore from "@/store/my-store";
import { getRandomID } from "@/utils/number";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Drawer, Form, Input, InputNumber, Radio, Space } from "antd";
import { CheckboxGroupProps } from "antd/es/checkbox/Group.js";
import FormItem from "antd/es/form/FormItem/index.js";
import { log } from "node:console";

function EditStudents({
  onCloseEdit,
  editOpen,
  EditStudent,
  setEditStudent,
}: any) {
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
      <Drawer
        title="Yangi student qo'shish"
        width={500}
        onClose={onCloseEdit}
        open={editOpen}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
        extra={<Space>{/* <Button onClick={onClose}>X</Button> */}</Space>}
        destroyOnClose
      >
        <Form
          initialValues={EditStudent}
          onFinish={(values) => {
            const localStudent = localStorage.getItem("students");
            const realStudents = localStudent ? JSON.parse(localStudent) : [];

            const updatedStudents = realStudents.map((student: any) => {
              if (student.id === EditStudent.id) {
                return {
                  ...student,
                  ...values,
                };
              }
              return student;
            });
            useGlobalStore.setState({ students: updatedStudents });
            localStorage.setItem("students", JSON.stringify(updatedStudents));
            onCloseEdit();
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

export default EditStudents;
