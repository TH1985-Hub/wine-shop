import React, { useState } from 'react';
import styles from './PaymentForm.module.scss'

const PaymentForm = ({ isTours, lang }) => {
  const [form, setForm] = useState({
    email: '',
    phone: '',
    firstName: '',
    lastName: '',
    count: 4,
    productType: 0,
    // language: ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};

    // Validate firstName
    if (!form.firstName.trim()) {
      errors.firstName = 'First Name is required';
    }

    // Validate lastName
    if (!form.lastName.trim()) {
      errors.lastName = 'Last Name is required';
    }

    // Validate phone
    if (!form.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^[0-9()+-]*$/.test(form.phone.trim())) {
      errors.phone = 'Invalid phone number format';
    }

    // Validate email
    if (!form.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email.trim())) {
      errors.email = 'Invalid email address';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit form data
      fetch('https://jraghatspanyan.am:8443/Products/BuyProduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      })
        .then(async response => {
          const data = await response.json();
          if (data.formUrl) window.open(data.formUrl);

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          // Clear form fields and errors
          setForm({
            email: '',
            phone: '',
            firstName: '',
            lastName: '',
            count: 4,
            productType: 0,
            // language: ''
          });
          setErrors({});
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.inputWrapper}>
        {errors.firstName && <span className={styles.error}>{errors.firstName}</span>}
        <input type="text" name="firstName" id="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} className={styles.input} />
      </div>
      <div className={styles.inputWrapper}>
        {errors.lastName && <span className={styles.error}>{errors.lastName}</span>}
        <input type="text" name="lastName" id="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} className={styles.input} />
      </div>
      <div className={styles.inputWrapper}>
        {errors.phone && <span className={styles.error}>{errors.phone}</span>}
        <input type="tel" name="phone" id="phone" placeholder="Phone" value={form.phone} onChange={handleChange} className={styles.input} />
      </div>
      <div className={styles.inputWrapper}>
        {errors.email && <span className={styles.error}>{errors.email}</span>}
        <input type="email" name="email" id="email" placeholder="Email" value={form.email} onChange={handleChange} className={styles.input} />
      </div>
      <div className={styles.inputWrapper}>
        <span className={styles.warning}>How tickets you want</span>
        <span className={styles.warning}>You can't buy less than four tickets</span>
        <input type="number" name="count" min="4" id="count" placeholder="How tickets you want" value={form.count = Number(form.count)} onChange={handleChange} className={styles.input} />
      </div>
      <div className={styles.inputWrapper}>
        <input hidden type="number" name="productType" id="productType" value={form.productType = Number(isTours)} onChange={handleChange} className={styles.input} />
      </div>
      {/*<div className={styles.inputWrapper}>*/}
      {/*  <input hidden type="number" name="language" id="language" value={form.language = lang} onChange={handleChange} className={styles.input} />*/}
      {/*</div>*/}
      <button type="submit" className={styles.button}>Submit</button>
    </form>
  );
};

export default PaymentForm;
