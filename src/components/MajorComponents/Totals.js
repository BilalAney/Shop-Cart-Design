/** @format */

import { memo } from "react";

function Totals({ courses, discount }) {
  const totalItems = courses.length;
  const totalPrice = courses
    .reduce((acc, crr) => (acc += crr.price * crr.quantity), 0)
    .toFixed(2);
  const userWillPay = Number(totalPrice) * Number(discount);
  const styles = {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    textAlign: "center",
  };
  return (
    <div className="Totals" style={styles}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <p style={{ display: "inline-block" }}>Total Items: {totalItems}</p>
        <p style={{ display: "inline-block" }}>Total Price: {totalPrice}$</p>
      </div>
      <p>Discount: {(discount ? +discount : 0) * 100}%</p>
      <p>You Will Pay: {userWillPay}</p>
    </div>
  );
}
export default memo(Totals);
