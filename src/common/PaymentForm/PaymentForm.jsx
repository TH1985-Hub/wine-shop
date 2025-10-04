import { useState } from "react";
import { Form, Input, Button } from "antd";
import { CreditCardOutlined } from "@ant-design/icons";
import { useLanguage } from "../../contexts/LanguageContext";
import { paymentTexts } from "./paymentTexts";
import styles from "./PaymentForm.module.css";

const PaymentForm = ({ isTours }) => {
  const [form] = Form.useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { currentLanguage } = useLanguage();
  const t = (key) => paymentTexts[currentLanguage]?.[key] || paymentTexts.en[key];

  const onFinish = async (values) => {
    setIsSubmitting(true);
   
    setTimeout(() => {
      setIsSubmitting(false);
    }, 1000);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleCancel = () => {
    form.resetFields();
  };

  return (
    <div className={styles.paymentContainer}>
      <div className={styles.formContainer}>
        <Form
          form={form}
          name="paymentForm"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className={styles.paymentForm}
          layout="vertical"
          autoComplete="off"
        >
          <Form.Item
            name="fullName"
            rules={[
              {
                required: true,
                message: t("error_fullName"),
              },
            ]}
          >
            <Input placeholder="Full Name" className={styles.inputField} />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: t("error_email"),
              },
              {
                type: 'email',
                message: t("error_emailValid"),
              },
            ]}
          >
            <Input type="email" placeholder="Email Address" className={styles.inputField} />
          </Form.Item>

          <Form.Item
            name="phone"
            rules={[
              {
                required: true,
                message: t("error_phone"),
              },
            ]}
          >
            <Input placeholder="Phone Number" className={styles.inputField} />
          </Form.Item>

          <Form.Item
            name="cardNumber"
            rules={[
              {
                required: true,
                message: t("error_cardNumber"),
              },
            ]}
            className={`${styles.formItem} ${styles.formItemAfterPhone}`}
          >
            <Input
              placeholder="Card Number"
              className={styles.inputField}
              maxLength={19}
              suffix={<CreditCardOutlined className={styles.cardIcon} />}
            />
          </Form.Item>

          <Form.Item
            name="cardholderName"
            rules={[
              {
                required: true,
                message: t("error_cardholderName"),
              },
            ]}
          >
            <Input placeholder="Cardholder Name" className={styles.inputField} />
          </Form.Item>

          <div className={styles.cardDetailsRow}>
            <Form.Item
              name="validUntil"
              rules={[
                {
                  required: true,
                  message: t("error_validUntil"),
                },
              ]}
              className={styles.halfFormItem}
            >
              <Input placeholder="Valid Until" className={styles.halfInputField} maxLength={5} />
            </Form.Item>

            <Form.Item
              name="cvv"
              rules={[
                {
                  required: true,
                  message: t("error_cvv"),
                },
              ]}
              className={styles.halfFormItem}
            >
              <Input placeholder="CVV" className={styles.halfInputField} maxLength={4} />
            </Form.Item>
          </div>

          <Form.Item className={styles.buttonContainer}>
            <Button
              type="primary"
              htmlType="submit"
              loading={isSubmitting}
              className={styles.authorizeButton}
            >
              Authorize Payment
            </Button>
          </Form.Item>

          <div className={styles.cancelContainer}>
            <Button type="link" onClick={handleCancel} className={styles.cancelText}>
              Cancel
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default PaymentForm;
