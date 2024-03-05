/** @format */

import { Children } from "react";
import Btn from "../MinorComponents/Btn";
import Title from "../MinorComponents/Title";
import Totals from "./Totals";
import CartItem from "./cartItem";
import List from "./list";
function CartMenu({children, courses, handleDeleteCourse }) {

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
      {children}
      </div>
    </div>
  );
}

export default CartMenu;
