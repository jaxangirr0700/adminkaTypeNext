import useGlobalStore from "@/store/my-store";
import { Button, Drawer, Form, Input, InputNumber, Radio, Space } from "antd";
import { CheckboxGroupProps } from "antd/es/checkbox/Group.js";
import FormItem from "antd/es/form/FormItem/index.js";

function EditGroups({
  onCloseEdit,
  editOpen,
  EditStudent,
  setEditStudent,
}: any) {
  const optionsActive: CheckboxGroupProps<boolean>["options"] = [
    { label: "Active", value: true },
    { label: "inactive", value: false },
  ];
  const state = useGlobalStore();
  return (
    <>
      <Drawer
        title=" Kategoriyani o'zgartirish "
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
            const localStudent = localStorage.getItem("groups");
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
            useGlobalStore.setState({ groups: updatedStudents });
            localStorage.setItem("groups", JSON.stringify(updatedStudents));
            onCloseEdit();
          }}
        >
          <FormItem
            label="Kategoriya nomi"
            name="name"
            rules={[
              { required: true, message: "Kategoriya nomi kiritilmadi!!!" },
            ]}
          >
            <Input />
          </FormItem>
          <FormItem
            label="Mahsulotlar soni"
            name="studentCount"
            rules={[
              { required: true, message: "Mahsulotlar soni kiritilmadi!!!" },
            ]}
          >
            <InputNumber />
          </FormItem>

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
              Submits
            </Button>
          </FormItem>
        </Form>
      </Drawer>
    </>
  );
}

export default EditGroups;
