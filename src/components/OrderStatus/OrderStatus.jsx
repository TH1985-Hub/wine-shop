import React, { useEffect, useState } from "react";
import styles from "./OrderStatus.module.scss";

function OrderStatus() {
  const queryParameters = new URLSearchParams(window.location.search);
  const orderId = queryParameters.get("orderId");

  const [orderData, setOrderData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (orderId) {
      fetch(`https://jraghatspanyan.am:8443/Products/GetOrderStatus/?orderId=${orderId}`, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          setOrderData(data);
          setLoading(false);
        })
        .catch((error) => console.log(error));
    }
  }, [orderId]);

  return (
    <div className={styles.container}>
      {loading && <p>Loading order status...</p>}
      {orderData && (
        <div className={styles.orderContainer}>
          <h2>Order Status</h2>
          <p>
            { orderData.orderStatus === 0 ||  orderData.orderStatus === 2 ?
              <div>Your payment Succeed</div> :
              <div>Your payment failed</div>
            }
          </p>
        </div>
      )}
    </div>
  );
}

export default OrderStatus;
