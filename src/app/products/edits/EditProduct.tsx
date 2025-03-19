import useGlobalStore from "@/store/my-store";
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

function EditProducts({
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
        title=" Mahsulotni o'zgartirish"
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
            const localStudent = localStorage.getItem("products");
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
            useGlobalStore.setState({ products: updatedStudents });
            localStorage.setItem("products", JSON.stringify(updatedStudents));
            onCloseEdit();
          }}
        >
          <FormItem
            label="Mahsulot nomi"
            name="name"
            rules={[
              { required: true, message: "Mahsulot nomi kiritilmadi!!!" },
            ]}
          >
            <Input />
          </FormItem>

          <FormItem
            label="Mahsulot narxi"
            name="price"
            rules={[
              { required: true, message: "Mahsulot narxi kiritilmadi!!!" },
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

export default EditProducts;
