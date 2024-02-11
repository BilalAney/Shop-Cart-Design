/** @format */

import Btn from "../MinorComponents/Btn";
import Title from "../MinorComponents/Title";
import Totals from "./Totals";
import CartItem from "./cartItem";
import List from "./list";
function CartMenu({ courses, handleDeleteCourse }) {
  const btnProps = {
    bgColor: "var(--default-dark-color)",
    color: "#fff",
    padding: "8px",
    margin: "5px",
    fontSize: "var(--size-one)",
  };
  return (
    <div className="theCart">
      <Title fontSize="var(--size-three)" fontWeight="600">
        YOUR CART
      </Title>
      <List>
        {courses.map((ele) => (
          <CartItem
            key={ele.id}
            course={ele}
            handleDeleteCourse={() => handleDeleteCourse(ele.id)}
          />
        ))}
      </List>

      <Totals courses={courses} />

      <div
        className="theCart--buttonsContainer"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
        }}
      >
        <Btn {...btnProps}>REMOVE ALL</Btn>
        <Btn {...btnProps}>CONTINUE!</Btn>
        <Btn {...btnProps}>SAVE IT FOR NOW</Btn>
      </div>
    </div>
  );
}

export default CartMenu;
