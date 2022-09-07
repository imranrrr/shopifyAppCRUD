import { Button, Modal, Form, FormLayout, TextField } from "@shopify/polaris";
import { useState, useCallback } from "react";

export default function AddProductModal({ isLoading, handleSubmit }) {
  const [active, setActive] = useState(true);
  const [product, setProduct] = useState({ title: "", price: 0 });
  const handleChange = useCallback(() => setActive(!active), [active]);

  const activator = <Button onClick={handleChange}>Add Product</Button>;

  const handleChangeField = useCallback((value, name) => {
    setProduct({ ...product, [name]: value });
  }, []);

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
          <Form onSubmit={() => handleSubmit(product)}>
            <FormLayout>
              <TextField
                onChange={(e) => handleChangeField(e, "title")}
                label="Title"
                type="text"
                name="title"
                value={product.title}
              />
              <TextField
                onChange={(e) => handleChangeField(e, "price")}
                label="Price"
                type="number"
                name="price"
                value={product.price}
              />
              <Button loading={isLoading} submit>
                Submit
              </Button>
            </FormLayout>
          </Form>
        </Modal.Section>
      </Modal>
    </div>
  );
}
