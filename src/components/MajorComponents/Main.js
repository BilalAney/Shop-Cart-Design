/** @format */
// @BilalAney THIS COMPONENT IS DEPRECATED, SO DON'T USE IT AT ALL
import { useState } from "react";

import CartMenu from "./CartMenu";
import ShopMenu from "./ShopMenu";

import Btn from "../MinorComponents/Btn";

function Main({ handleSelect, Courses }) {
  const [cart, setCart] = useState([]);

  function handleAddCourse(course) {
    //If the course is already exist, then simply increment the quantity.
    //So I will use array.find function, this will return the course if it was
    //exist, else it will return undefined

    const theSameCourse = cart.find((ele) => ele.id === course.id);

    //if the course already exists, then get the course from the cart array
    //then modify it (manipulate the quantity)
    if (theSameCourse) {
      setCart((pre) =>
        pre.map((ele) =>
          ele.id === course.id ? { ...ele, quantity: ele.quantity + 1 } : ele
        )
      );
    } else setCart((pre) => [...pre, course]); //else, simply add it
  }

  function handleDeleteCourse(id) {
    //if the course has more than one item, then decrease it by one, else remove it permenantly
    if (cart.find((ele) => ele.id === id)?.quantity > 1) {
      setCart((pre) =>
        pre.map((ele) =>
          ele.id === id ? { ...ele, quantity: ele.quantity - 1 } : ele
        )
      );
    } //if there is onyl one quantity, => delete the item
    else setCart((pre) => pre.filter((ele) => ele.id !== id));
  }
  return (
    <main className="MainSe">
      <ShopMenu
        courses={Courses}
        handleSelect={handleSelect}
        handleAddCourse={handleAddCourse}
      >
        <Btn
          bgColor="var(--default-dark-color)"
          color="#fff"
          fontSize="var(--size-one)"
          width="100%"
        >
          REFRESH
        </Btn>
      </ShopMenu>

      <CartMenu courses={cart} handleDeleteCourse={handleDeleteCourse} />
    </main>
  );
}

export default Main;
