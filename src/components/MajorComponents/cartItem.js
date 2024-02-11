/** @format */

import Btn from "../MinorComponents/Btn";
import Item from "../MinorComponents/Item";

function CartItem({ course, handleDeleteCourse }) {
  const btnProps = {
    bgColor: "var(--default-light-red)",
    color: "#fff",
    fontSize: "var(--size-one)",
  };
  return (
    <Item
      img={course.img}
      buttons={
        <Btn {...btnProps} handleClick={handleDeleteCourse}>
          {course.quantity > 1 ? "Decrease Quantity" : "Remove"}
        </Btn>
      }
    >
      <>
        <p className="middle--title">{course.title}</p>
        <p>Quantity: {course.quantity}</p>
      </>
    </Item>
  );
}

export default CartItem;
