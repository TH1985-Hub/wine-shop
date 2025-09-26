import { useState } from "react";
import { Form, Input, Button } from "antd";
import { CreditCardOutlined } from "@ant-design/icons";
import { useLanguage } from "../../contexts/LanguageContext";
import { paymentTexts } from "./paymentTexts";
import styles from "./PaymentForm.module.css";

const PaymentForm = ({ isTours }) => {
  const [form] = Form.useForm();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    cardNumber: "",
    cardholderName: "",
    validUntil: "",
    cvv: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { currentLanguage } = useLanguage();
  const t = (key) => paymentTexts[currentLanguage]?.[key] || paymentTexts.en[key];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = t("error_fullName");
    if (!formData.email.trim()) {
      newErrors.email = t("error_email");
    } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
      newErrors.email = t("error_emailValid");
    }
    if (!formData.phone.trim()) newErrors.phone = t("error_phone");
    if (!formData.cardNumber.trim()) newErrors.cardNumber = t("error_cardNumber");
    if (!formData.cardholderName.trim()) newErrors.cardholderName = t("error_cardholderName");
    if (!formData.validUntil.trim()) newErrors.validUntil = t("error_validUntil");
    if (!formData.cvv.trim()) newErrors.cvv = t("error_cvv");

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
    }, 1000);
  };

  const handleCancel = () => {
    form.resetFields();
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      cardNumber: "",
      cardholderName: "",
      validUntil: "",
      cvv: "",
    });
  };

  return (
    <div className={styles.paymentContainer}>
      <div className={styles.formContainer}>
        <Form form={form} onFinish={handleSubmit} className={styles.paymentForm} layout="vertical">
          <Form.Item className={styles.formItem}>
            <Input
              value={formData.fullName}
              onChange={(e) => handleChange("fullName", e.target.value)}
              placeholder="Full Name"
              className={styles.inputField}
            />
            {errors.fullName && <span className={styles.errorText}>{errors.fullName}</span>}
          </Form.Item>

          <Form.Item className={styles.formItem}>
            <Input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="Email Address"
              className={styles.inputField}
            />
            {errors.email && <span className={styles.errorText}>{errors.email}</span>}
          </Form.Item>

          <Form.Item className={styles.formItem}>
            <Input
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              placeholder="Phone Number"
              className={styles.inputField}
            />
            {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
          </Form.Item>

        
          <Form.Item className={`${styles.formItem} ${styles.formItemAfterPhone}`}>
            <Input
              value={formData.cardNumber}
              onChange={(e) => handleChange("cardNumber", e.target.value)}
              placeholder="Card Number"
              className={styles.inputField}
              maxLength={19}
              suffix={<CreditCardOutlined className={styles.cardIcon} />}
            />
            {errors.cardNumber && <span className={styles.errorText}>{errors.cardNumber}</span>}
          </Form.Item>

          <Form.Item className={styles.formItem}>
            <Input
              value={formData.cardholderName}
              onChange={(e) => handleChange("cardholderName", e.target.value)}
              placeholder="Cardholder Name"
              className={styles.inputField}
            />
            {errors.cardholderName && <span className={styles.errorText}>{errors.cardholderName}</span>}
          </Form.Item>

          <div className={styles.cardDetailsRow}>
            <Form.Item className={styles.halfFormItem}>
              <Input
                value={formData.validUntil}
                onChange={(e) => handleChange("validUntil", e.target.value)}
                placeholder="Valid Until"
                className={styles.halfInputField}
                maxLength={5}
              />
              {errors.validUntil && <span className={styles.errorText}>{errors.validUntil}</span>}
            </Form.Item>

            <Form.Item className={styles.halfFormItem}>
              <Input
                value={formData.cvv}
                onChange={(e) => handleChange("cvv", e.target.value)}
                placeholder="CVV"
                className={styles.halfInputField}
                maxLength={4}
              />
              {errors.cvv && <span className={styles.errorText}>{errors.cvv}</span>}
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
