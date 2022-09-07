import {
  Button,
  Modal,
  Form,
  FormLayout,
  Checkbox,
  TextField,
} from "@shopify/polaris";
import { useState, useCallback } from "react";

export default function AddProductModal() {
  const [active, setActive] = useState(true);
  const [product, setProduct] = useState({ title: "", price: 0 });

  const activator = <Button onClick={handleChange}>Add Product</Button>;

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  });

  const handleSubmit = () => {};
  return (
    <div>
      <Modal
        activator={activator}
        open={active}
        onClose={handleChange}
        title="Reach more shoppers with Instagram product tags"
        primaryAction={{
          content: "Add Instagram",
          onAction: handleChange,
        }}
        secondaryActions={[
          {
            content: "Learn more",
            onAction: handleChange,
          },
        ]}
      >
        <Modal.Section>
          <Form onSubmit={handleSubmit}>
            <FormLayout>
              <TextField
                onChange={handleEmailChange}
                label="Title"
                type="text"
                name="title"
              />
              <TextField
                onChange={handleChange}
                label="Price"
                type="number"
                name="price"
              />
              <Button submit>Submit</Button>
            </FormLayout>
          </Form>
        </Modal.Section>
      </Modal>
    </div>
  );
}
