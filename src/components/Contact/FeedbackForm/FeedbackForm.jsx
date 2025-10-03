import { useState } from "react";
import { Form, Input, Button, Typography, message } from "antd";
import { useLanguage } from "../../../contexts/LanguageContext";
import {translations} from "../texts"; 
import styles from "./FeedbackForm.module.css";

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

export default function FeedbackForm() {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];
  const [form] = Form.useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (values) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        message.success(t.submitSuccess);
        form.resetFields();
      } else {
        message.error(t.submitError);
      }
    } catch (error) {
      console.error("[v0] Form submission error:", error);
      message.error(t.submitError);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Title level={2} className={styles.title}>
          {t.getFeedback}
        </Title>
        <Paragraph className={styles.subtitle}>{t.feedbackSubtitle}</Paragraph>
      </div>

      <Form form={form} onFinish={handleSubmit} layout="vertical" className={styles.form} requiredMark={false}>
        <Form.Item name="firstName" rules={[{ required: true, message: t.required }]} className={styles.formItem}>
          <Input placeholder={`${t.firstName} *`} className={styles.input} />
        </Form.Item>

        <Form.Item name="lastName" rules={[{ required: true, message: t.required }]} className={styles.formItem}>
          <Input placeholder={`${t.lastName} *`} className={styles.input} />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[
            { required: true, message: t.required },
            { type: "email", message: t.invalidEmail },
          ]}
          className={styles.formItem}
        >
          <Input placeholder={`${t.email} *`} className={styles.input} />
        </Form.Item>

        <Form.Item name="phoneNumber" rules={[{ required: true, message: t.required }]} className={styles.formItem}>
          <Input placeholder={`${t.phoneNumber} *`} className={styles.input} />
        </Form.Item>

        <Form.Item name="subject" rules={[{ required: true, message: t.required }]} className={styles.formItem}>
          <Input placeholder={`${t.subject} *`} className={styles.input} />
        </Form.Item>

        <Form.Item name="message" className={styles.formItem}>
          <TextArea placeholder={t.message} rows={4} className={styles.textarea} />
        </Form.Item>

        <Form.Item className={styles.submitButtonWrapper}>
          <Button type="primary" htmlType="submit" loading={isSubmitting} className={styles.submitButton} block>
            {isSubmitting ? t.sending : t.send}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}