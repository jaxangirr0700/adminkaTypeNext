import useGlobalStore from "@/store/my-store";
import { Button, Drawer, Form, Input, InputNumber, Radio, Space } from "antd";
import { CheckboxGroupProps } from "antd/es/checkbox/Group.js";
import FormItem from "antd/es/form/FormItem/index.js";

function EditStudents({
  onCloseEdit,
  editOpen,
  EditStudent,
  setEditStudent,
}: {
  onCloseEdit: () => void;
  editOpen: boolean;
  EditStudent: {
    id: string;
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
    active: boolean;
  };
  setEditStudent: (student: any) => void; // Aniq tur ko'rsatilishi kerak
}) {
  const options: CheckboxGroupProps<string>["options"] = [
    { label: "Erkak", value: "male" },
    { label: "Ayol", value: "female" },
  ];
  const optionsActive: CheckboxGroupProps<boolean>["options"] = [
    { label: "Active", value: true },
    { label: "Inactive", value: false },
  ];

  return (
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
        <Form.Item
          label="Ism"
          name="firstName"
          rules={[{ required: true, message: "Ism kiritilmadi!!!" }]}
        >
          <Input />
        </Form.Item>
        <FormItem
          label="Familiya"
          name="lastName"
          rules={[{ required: true, message: "Familiya kiritilmadi!!!" }]}
        >
          <Input />
        </FormItem>
        <Form.Item
          label="Yosh"
          name="age"
          rules={[{ required: true, message: "Yoshingiz kiritilmadi!!!" }]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item label="Jinsi" name="gender">
          <Radio.Group
            block
            options={options}
            defaultValue={EditStudent.gender} // Aniq gender qiymatini oling
            optionType="button"
            buttonStyle="solid"
          />
        </Form.Item>
        <Form.Item label="Active" name="active">
          <Radio.Group
            block
            options={optionsActive}
            defaultValue={EditStudent.active} // Aniq active qiymatini oling
            optionType="button"
            buttonStyle="solid"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
}

export default EditStudents;
